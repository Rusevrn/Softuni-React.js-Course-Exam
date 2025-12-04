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
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadGame();
    }, [_id]);

    return { game, isLoading };
}

