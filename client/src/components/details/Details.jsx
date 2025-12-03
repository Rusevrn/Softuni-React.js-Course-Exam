import { useParams } from "react-router"
import DetailsComments from "./DetailsComments"
import DetailsHeader from "./DetailsHeader"
import DetailsSection from "./DetailsSection"
import useFetchGame from "../../hooks/useFetchGame";


function Details() {
    const { _id } = useParams();
    const { game } = useFetchGame(_id);

    return (
        <>
            <DetailsHeader title={game?.title}/>

            <DetailsSection {...game} _id={_id} />

            <DetailsComments reviews={game?.reviews} comments={game?.comments} />
        </>
    )
}

export default Details