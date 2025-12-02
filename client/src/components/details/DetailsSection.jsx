

function DetailsSection({ title, genres, _id, isVerified, imageUrl, summary, likes, description }) {

    return (
        <div className="single-product section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-image">
                            <img src={`/${imageUrl}`} alt={title} />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h4>{title}</h4>
                        {isVerified && <i className="fa fa-check-circle"></i>}
                        <p>{summary} {description}</p>
                        <form id="qty" action="#">
                            <span>{likes} </span>
                            <button type="submit"><i className="fa fa-thumbs-up"></i>upvote</button>
                        </form>
                        <ul>
                            <li><span>Game ID:</span>{_id}</li>
                            <li><span>Genre: </span>{genres?.join(' ')}</li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <div className="sep"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSection