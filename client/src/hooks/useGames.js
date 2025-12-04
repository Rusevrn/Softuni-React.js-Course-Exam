import { useEffect, useState } from "react";
import { fetchGames } from "../services/games";

export default function useGames() {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadGames = async () => {
            setIsLoading(true);

            try {
                const data = await fetchGames();
                const gamesArray = Object.entries(data).map(([id, game]) => ({
                    _id: id,
                    ...game
                }));
                setGames(gamesArray);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadGames();
    }, []);

    return { games, isLoading};
}
