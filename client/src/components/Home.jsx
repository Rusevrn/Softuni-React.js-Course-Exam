import { Link } from "react-router"
import CatalogItem from "./catalog/CatalogItem"
import useGames from "../hooks/useGames"
import { useEffect, useState } from "react";


function Home() {
    const {games , isLoading} = useGames();
    const [trendingGames, setTrendingGames] = useState([]);
    const [mostPlayedGames, setMostPlayedGames] = useState([]);

    function trending(game) {
        return game.likes + (Date.now() - game._createdOn) / 100000000;
    }

    useEffect(() => {
        setTrendingGames(
            games.sort((a, b) => trending(b) - trending(a)
            ).slice(0, 4)
        )
        setMostPlayedGames(
            games.sort((a, b) => b.players - a.players
            ).slice(0, 6)
        )
    }, [isLoading])

    return (
        <>
            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="caption header-text">
                                <h6>Welcome to lugx</h6>
                                <h2>BEST GAMING SITE EVER!</h2>
                                <p>
                                    LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
                                    You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="right-image">
                                <img src="assets/images/banner-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>Trending</h6>
                                <h2>Trending Games</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to={'/catalog'}>View All</Link>
                            </div>
                        </div>
                        {trendingGames.map(game =>
                            <CatalogItem key={game._id} {...game} />
                        )}
                    </div>
                </div>
            </div>

            <div className="section most-played">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h6>TOP GAMES</h6>
                                <h2>Most Played</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to={'/catalog'}>View All</Link>
                            </div>
                        </div>
                        {mostPlayedGames.map(game =>
                            <CatalogItem key={game._id} {...game} variant />
                        )}
                    </div>
                </div>
            </div>

            <div className="section cta">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="shop">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h6>Our Catalog</h6>
                                            <h2>Go Browse & Find The Best <em>Game</em> For You!</h2>
                                        </div>
                                        <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                                        <div className="main-button">
                                            <Link to={'/catalog'}>View Catalog</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2 align-self-end">
                            <div className="subscribe">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h6>NEWSLETTER</h6>
                                            <h2>Get Up To Date On New Releases By <em>Subscribing</em> To Our Newsletter!</h2>
                                        </div>
                                        <div className="search-input">
                                            <form id="subscribe" action="#">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email..." />
                                                <button type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home