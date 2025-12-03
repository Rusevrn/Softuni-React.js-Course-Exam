import { Link, useNavigate } from "react-router"
import CatalogItem from "./CatalogItem"
import useFetchGames from "../../hooks/useFetchGames"
import { useEffect, useState } from "react";

function Catalog() {
    const {games, isLoading} = useFetchGames();
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('Show All');
    const genres = ['Show All', 'Adventure', 'Action', 'Shooter'];
    const [viewedGames, setViewedGames] = useState(games);

    useEffect(() => {
        if (activeButton === 'Show All') {
            setViewedGames(games);
        } else {
            setViewedGames(
                games.filter(game => game.genres.includes(activeButton))
            );
        };
    }, [activeButton, isLoading])

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Our Catalog</h3>
                            <span className="breadcrumb"><Link to={'/'}>Home</Link> {">"} Catalog</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section trending">
                <div className="container">
                    <ul className="trending-filter">
                        {genres.map(genre => (
                            <li key={genre}>
                                <button className={activeButton === genre ? "is_active" : undefined}
                                    onClick={() => setActiveButton(genre)}>{genre}</button>
                            </li>
                        ))}
                        <li>
                            <button onClick={() => navigate('/create')}>add a game!</button>
                        </li>
                    </ul>

                    <div className="row trending-box">
                        {viewedGames.map(game => (
                            <CatalogItem key={game._id} {...game} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog