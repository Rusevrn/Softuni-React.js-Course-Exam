import { Link } from "react-router"
import CatalogItem from "./CatalogItem"

function Catalog() {
    
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
                        <li>
                            <a className="is_active" href="#!" data-filter="*">Show All</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".adv">Adventure</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".act">Action</a>
                        </li>
                        <li>
                            <a href="#!" data-filter=".sht">Shooter</a>
                        </li>
                    </ul>
                    <div className="row trending-box">
                        {/*.map this
                        {games.map(game => (
                            <CatalogItem key={game._id} {...game} />
                        ))}
                        */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog