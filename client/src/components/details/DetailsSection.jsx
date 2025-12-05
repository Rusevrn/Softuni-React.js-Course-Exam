import { useNavigate } from "react-router"
import { useUserContext } from "../../contexts/UserContext";
import { deleteGame } from "../../services/games";

function DetailsSection({ title, genres, _id, isVerified, imageUrl, summary, likes, description, _ownerId }) {
    const navigate = useNavigate();
    const { user } = useUserContext();
    const isAdmin = user?.email === "admin@abv.bg";

    const handleDelete = async () => {
        const isConfirmed = window.confirm(`Are you sure you want to delete ${title} ?`);
        if (!isConfirmed) return;
        try {
            await deleteGame(_id);
            navigate('/catalog');
        } catch (err) {
            console.log(err.message);
        }
    }

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
                            <span>{likes} upvotes </span>
                            {user &&
                                <button type="submit"><i className="fa fa-thumbs-up"></i>upvote</button>
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
        </div>
    )
}

export default DetailsSection