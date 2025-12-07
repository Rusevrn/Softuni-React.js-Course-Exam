import { useUserContext } from "../contexts/UserContext";
import { useProfile } from "../hooks/useProfile";
import { Link } from "react-router";

export default function Profile() {
    const { user } = useUserContext();
    const { ownedGames, likedGames, userComments } = useProfile(user);

    return (
        <div className="profile">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h4 className="mb-3">🎮 My Games</h4>
                            {ownedGames.length === 0 ? ( <p className="text-muted">No games created yet.</p> ) :
                                (
                                    <div className="row g-3">
                                        {ownedGames.map(game => (
                                            <div key={game._id} className="col-md-3">
                                                <div className="card h-100  ">
                                                    <img
                                                        src={game.imageUrl}
                                                        className="card-img-top"
                                                        alt={game.title}
                                                        style={{ height: "250px", objectFit: "cover" }}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{game.title}</h5>
                                                        <p className="card-text text-muted">
                                                            {game.summary}
                                                        </p>
                                                        <Link to={`/details/${game._id}`} className="btn btn-sm btn-primary">
                                                            View Game
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </div>
                    </div>

                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h4 className="mb-3">❤️ Liked Games</h4>
                            {likedGames.length === 0 ? ( <p className="text-muted">No liked games yet.</p> ) :
                                (
                                    <ul className="list-group list-group-flush">
                                        {likedGames.map((like, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                <span>{like.title}</span>
                                                <Link to={`/details/${like.gameId}`} className="btn btn-sm btn-outline-primary">
                                                    View
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </div>
                    </div>

                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="mb-3">💬 My Comments</h4>
                            {userComments.length === 0 ? ( <p className="text-muted">No comments yet.</p> ) :
                                (
                                    <ul className="list-group list-group-flush">
                                        {userComments.map((comment, index) => (
                                            <li key={index} className="list-group-item">
                                                <div className="fw-bold mb-1">
                                                    On: {comment.gameTitle}
                                                </div>
                                                <div className="text-muted mb-2">
                                                    {new Date(comment.date).toLocaleString()}
                                                </div>
                                                <div className="mb-2">
                                                    "{comment.text}"
                                                </div>
                                                <Link
                                                    to={`/details/${comment.gameId}`}
                                                    className="btn btn-sm btn-outline-secondary"
                                                >Go to Game</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
                        <div className="card-body text-center">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{ width: "100px", height: "100px", fontSize: "40px" }}
                            >{user?.email?.charAt(0).toUpperCase()}</div>
                            <h5 className="mb-1">{user?.username || "User"}</h5>
                            <p className="text-muted mb-3">{user?.email}</p>
                            <div className="text-start small text-muted">
                                <div><strong>Games:</strong> {ownedGames.length}</div>
                                <div><strong>Likes:</strong> {likedGames.length}</div>
                                <div><strong>Comments:</strong> {userComments.length}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}