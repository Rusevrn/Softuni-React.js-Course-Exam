import { Link } from "react-router"

function DetailsHeader({title}) {
    return (
        <div className="page-heading header-text">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>{title}</h3>
                        <span className="breadcrumb"><Link to={'/'}>Home</Link>  {">"}  <Link to={'/'}>Catalog</Link>  {">"}  {title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsHeader