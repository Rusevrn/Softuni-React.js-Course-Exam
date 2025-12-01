import { useEffect, useState } from "react";

export default function useFetch() {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const response = await (await fetch('http://localhost:3030/jsonstore/games')).json()
                setGames(Object.entries(response).map(([id, game]) => ({
                    _id: id,
                    ...game
                })))
            } catch (error) {
                console.log(error.message)
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])

    return { games, isLoading };
}
