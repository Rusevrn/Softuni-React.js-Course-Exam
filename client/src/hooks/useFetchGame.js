import { useEffect, useState } from "react";


export default function useFetchGame(_id) {
    const [game, setGame] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3030/jsonstore/games/${_id}`);
                const data = await response.json();
                setGame(data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false)
            }
        })();
    }, []);
    console.log(game)
    return { game, isLoading };
}

