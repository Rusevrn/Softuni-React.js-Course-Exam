import { useParams } from "react-router"
import DetailsComments from "./DetailsComments"
import DetailsHeader from "./DetailsHeader"
import DetailsSection from "./DetailsSection"
import useGame from "../../hooks/useGame";
import { useUserContext } from "../../contexts/UserContext";
import { useInteractions } from "../../hooks/useInteraction";


function Details() {
    const { _id } = useParams();
    const { game } = useGame(_id);
    const { user } = useUserContext();
    const { interactions, addComment, toggleLike, likesCount, userHasLiked, deleteCommentHandler } = useInteractions(_id, user)
    console.log(interactions)
    //console.log(game)

    return (
        <>
            <DetailsHeader title={game?.title} />

            <DetailsSection {...game} _id={_id}
                userHasLiked={userHasLiked}
                toggleLike={toggleLike}
                likes={likesCount}
                user={user} />

            <DetailsComments reviews={game?.reviews} 
            {...interactions} 
            deleteCommentHandler={deleteCommentHandler}
            addComment={addComment} 
            user={user}/>
        </>
    )
}

export default Details