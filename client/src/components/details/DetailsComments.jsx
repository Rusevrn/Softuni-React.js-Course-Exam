import { useState } from "react";


function DetailsComments({ reviews, comments, addComment, user, deleteCommentHandler }) {
    const [text, setText] = useState("");
    const [isCommentsActive, setIsCommentsActive] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addComment(text);
        setText("");
    };

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
                                                onClick={() => setIsCommentsActive(true)}
                                                data-bs-target="#description" type="button" role="tab"
                                                aria-controls="description" aria-selected="true">Comments ({comments?.length})</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                                onClick={() => setIsCommentsActive(false)}
                                                data-bs-target="#reviews" type="button" role="tab"
                                                aria-controls="reviews" aria-selected="false">Reviews ({reviews?.length})</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                        {comments?.map(comment => {
                                            const key = comment.userId + comment.date;
                                            const isOwner = user && user._id === comment.userId;
                                            return (
                                                <div key={key} className="comment-row">
                                                    <p>{comment.text}
                                                        {isOwner && (
                                                        <button onClick={() => deleteCommentHandler(key)}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    )}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        {reviews?.map(review => (
                                            <p key={review}>{review}</p>
                                        ))}
                                    </div>
                                    {user && isCommentsActive && (
                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={text}
                                                    onChange={(e) => setText(e.target.value)}
                                                    placeholder="Add a comment"
                                                />
                                                <button type="submit">Comment</button>
                                            </form>
                                        </div>
                                    )}
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