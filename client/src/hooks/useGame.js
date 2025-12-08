import { useEffect, useState } from "react";
import { fetchGame as fetchGame } from "../services/games";

export default function useGame(_id) {
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!_id) return;

        setIsLoading(true);

        const loadGame = async () => {
            try {
                const data = await fetchGame(_id);
                setGame(data);
            } catch (err) {
                alert("There was an issue with fetching your game.");
            } finally {
                setIsLoading(false);
            }
        };

        loadGame();
    }, [_id]);

    return { game, isLoading };
}

