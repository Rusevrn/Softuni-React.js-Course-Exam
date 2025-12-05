
function GameForm({ formData, changeHandler, submitHandler }) {

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 edit-page">
            <div className="card shadow p-4">
                <h3 className="mb-4 text-center">{location.pathname === '/create' ? 'Add Game' : 'Edit Game'}</h3>

                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-lg-4 d-flex flex-column align-items-center">
                            {formData.imageUrl &&
                                <img
                                    src={"/" + formData.imageUrl}
                                    alt={formData.title}
                                    className="img-fluid rounded mb-3 shadow-sm"
                                    style={{ maxWidth: "320px", borderRadius: "8px", objectFit: "contain" }}
                                />
                            }
                            <input
                                type="text"
                                name="imageUrl"
                                className="form-control"
                                placeholder={formData.imageUrl}
                                value={formData.imageUrl}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder={formData.title}
                                        value={formData.title}
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Genres (comma separated)</label>
                                    <input
                                        type="text"
                                        name="genres"
                                        className="form-control"
                                        placeholder={formData.genres}
                                        value={formData.genres}
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="col-6 mb-3">
                                    <label className="form-label">Players</label>
                                    <input
                                        type="number"
                                        name="players"
                                        className="form-control"
                                        placeholder={formData.players}
                                        value={formData.players}
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="col-6 mb-3">
                                    <label className="form-label">Release Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="form-control"
                                        placeholder={formData.date}
                                        value={formData.date}
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Summary</label>
                                    <textarea
                                        name="summary"
                                        className="form-control"
                                        rows={2}
                                        placeholder={formData.summary}
                                        value={formData.summary}
                                        onChange={changeHandler}
                                    />
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        rows={4}
                                        placeholder={formData.description}
                                        value={formData.description}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Reviews (comma separated)</label>
                                    <input
                                        type="text"
                                        name="reviews"
                                        className="form-control"
                                        placeholder={formData.reviews}
                                        value={formData.reviews}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>

                            <button className="btn btn-primary w-100 mt-2">Save Changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GameForm