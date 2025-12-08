import { useNavigate } from "react-router"
import { deleteGame, toggleVerifyGame } from "../../services/games";
import normalizeImageUrl from "../../utils/normalizeImageUrl";
import { useState, useEffect } from "react";

function DetailsSection({ title, genres, _id, isVerified, imageUrl, summary, likes, description, _ownerId, user, userHasLiked, toggleLike }) {
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate();
    const isAdmin = user?.email === "admin@abv.bg";

    useEffect(() => {
        setVerified(isVerified);
    }, [isVerified]);

    const handleDelete = async () => {
        const isConfirmed = window.confirm(`Are you sure you want to delete ${title} ?`);
        if (!isConfirmed) return;
        try {
            await deleteGame(_id);
            navigate('/catalog');
        } catch (err) {
            alert("There was an issue with deleting your game.");
        }
    }

    const handleVerification = async () => {
        try {
            await toggleVerifyGame(_id, verified);
            setVerified(verified => !verified)

        } catch (error) {
            alert("There was an issue with veryfing the game.")
        }
    }

    return (
        <div className="single-product section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-image">
                            <img src={normalizeImageUrl(imageUrl) || 'loading'} alt={title} />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h4>{title}</h4>
                        {verified && <i className="fa fa-check-circle"></i>}
                        {isAdmin &&
                            <button onClick={handleVerification}>{verified ?
                                "Unverify" : "Verify"}
                            </button>
                        }
                        <p>{summary} {description}</p>
                        <form id="qty" onSubmit={(e) => {
                            e.preventDefault();
                            toggleLike();
                        }}>
                            <span>{likes} upvotes </span>
                            {user &&
                                <button type="submit"><i className="fa fa-thumbs-up"></i>
                                    {userHasLiked ? "downvote" : "upvote"}
                                </button>
                            }
                        </form>
                        <ul>
                            <li><span>Game ID:</span>{_id}</li>
                            <li><span>Genre: </span>{genres?.join(' ')}</li>
                        </ul>
                        {user && (_ownerId === user._id || isAdmin) && (
                            <>
                                <button className="edit" onClick={() => navigate(`/details/${_id}/edit`)}> <i className="fas fa-edit"></i> Edit</button>
                                <button className="delete" onClick={handleDelete}> <i className="fa-solid fa-trash"></i> Delete</button>
                            </>
                        )}
                    </div>
                    <div className="col-lg-12">
                        <div className="sep"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailsSection