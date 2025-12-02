import { useParams } from "react-router"
import DetailsComments from "./DetailsComments"
import DetailsHeader from "./DetailsHeader"
import DetailsSection from "./DetailsSection"
import { useEffect, useState } from "react";


function Details() {
    const { _id } = useParams();
    const [game, setGame] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3030/jsonstore/games/${_id}`);
                const data = await response.json();
                setGame(data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [_id]);
    console.log(game)
    return (
        <>
            <DetailsHeader title={game?.title}/>

            <DetailsSection {...game} _id={_id} />

            <DetailsComments reviews={game?.reviews} comments={game?.comments} />
        </>
    )
}

export default Details