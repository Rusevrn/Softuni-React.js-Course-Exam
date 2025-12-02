import { useState } from "react";

function GameEditForm({ game, onSubmit }) {
    const [formData, setFormData] = useState({
        title: game?.title || "",
        summary: game?.summary || "",
        description: game?.description || "",
        genres: game?.genres?.join(", ") || "",
        players: game?.players || "",
        date: game?.date || "",
        imageUrl: game?.imageUrl || ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            genres: formData.genres.split(",").map(g => g.trim())
            //post method here, add useParams and pass id from <Link> in details, <Link>edit</Link> button visible only to the "owner" of the game.
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 edit-page">
            <div className="card shadow p-4">
                <h3 className="mb-4 text-center">Edit Game</h3>

                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-lg-4 d-flex flex-column align-items-center">
                            <img
                                /*src={formData?.imageUrl}*/
                                src="/assets/images/cyberpunk.jpg"
                                alt={formData.title}
                                className="img-fluid rounded mb-3 shadow-sm"
                                style={{ maxWidth: "320px", borderRadius: "8px", objectFit: "contain" }}
                            />
                            <input
                                type="text"
                                name="imageUrl"
                                className="form-control"
                                placeholder="Image URL"
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
                                        value={formData.description}
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

export default GameEditForm