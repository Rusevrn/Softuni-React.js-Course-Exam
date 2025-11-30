import { Link } from "react-router"


function CatalogItem({ genres, title, imageUrl, variant, isVerified }) {
    return (
        <div className={variant ? "col-lg-2 col-md-6 col-sm-6 top-games" : "col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv"}>
            <div className="item">
                <div className="thumb">
                    <Link to={'/details'}><img src={imageUrl} alt="" /></Link>
                    {isVerified && <i className="fa fa-check-circle"></i>}
                </div>
                <div className="down-content">
                    <span className="category">{genres.join(' ')}</span> 
                    <h4>{title}</h4>
                    {variant ? <Link to={'/details'}>Explore</Link> : <Link to={'/details'}><i className="fa fa-eye" aria-hidden="true"></i></Link>}
                </div>
            </div>
        </div>
    )
}

export default CatalogItem 