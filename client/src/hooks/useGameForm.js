import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchGame, createGame, updateGame } from "../services/games";
import { buildGameMeta } from "../utils/buildGameMeta";

export function useGameForm(_id, user) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        description: "",
        genres: "",
        players: "",
        date: "",
        imageUrl: "",
        reviews: ""
    });

    const [originalGame, setOriginalGame] = useState(null);
    const [isLoading, setIsLoading] = useState(!!_id);

    useEffect(() => {
        if (!_id) return;

        (async () => {
            setIsLoading(true);
            try {
                const game = await fetchGame(_id);
                setOriginalGame(game);

                setFormData({
                    title: game.title || "",
                    summary: game.summary || "",
                    description: game.description || "",
                    genres: game.genres?.join(", ") || "",
                    players: game.players || "",
                    date: game.date || "",
                    imageUrl: game.imageUrl || "",
                    reviews: game.reviews?.join(", ") || ""
                });
            } catch (err) {
                alert("There was a problem with fetching your game.");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [_id]);

    const changeHandler = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            genres: formData.genres.split(",").map(g => g.trim()),
            reviews: formData.reviews.split(",").map(r => r.trim()),
            ...buildGameMeta(originalGame, {
                _ownerId: originalGame?._ownerId ?? user._id,
                _createdOn: originalGame?._createdOn ?? Date.now()
            })
        };

        try {
            const data = _id ? await updateGame(_id, payload) : await createGame(payload);
            navigate(`/details/${_id ?? data._id}`);
        } catch (err) {
            alert(`There was an issue with ${_id ? 'updating' : 'creating'} your game.`);
        }
    };

    return {
        formData,
        changeHandler,
        submitHandler,
        isLoading
    };
}