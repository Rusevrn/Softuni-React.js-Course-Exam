

function DetailsComments({ comments, reviews }) {
    return (
        <div className="more-info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tabs-content">
                            <div className="row">
                                <div className="nav-wrapper ">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                                data-bs-target="#description" type="button" role="tab"
                                                aria-controls="description" aria-selected="true">Comments </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                                data-bs-target="#reviews" type="button" role="tab"
                                                aria-controls="reviews" aria-selected="false">Reviews ({reviews?.length})</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                        {comments?.map(comment => (
                                            <p key={comment}>{comment}</p>
                                        ))}
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        {reviews?.map(review => (
                                            <p key={review}>{review}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsComments