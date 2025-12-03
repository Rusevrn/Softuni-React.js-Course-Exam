import { useEffect, useState } from "react";

export function useGameForm(_id) {
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
                const res = await fetch(`http://localhost:3030/jsonstore/games/${_id}`);
                const game = await res.json();
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
            } catch (e) {
                console.error(e);
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
            ...(originalGame ? {
                likes: originalGame.likes,
                comments: originalGame.comments,
                isVerified: originalGame.isVerified,
                _ownerId: originalGame._ownerId,
                _createdOn: originalGame._createdOn
            } : {
                likes: 0,
                comments: [],
                isVerified: false,
                _ownerId: "No owner", // Add owner when profiles are introduced.
                _createdOn: Date.now()
            })
        };

        const url = _id ? `http://localhost:3030/jsonstore/games/${_id}` : `http://localhost:3030/jsonstore/games`;
        const method = _id ? "PUT" : "POST";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error("Request failed.");
            return await res.json();
        } catch (err) {
            console.error(err);
        }
    };

    return {
        formData,
        changeHandler,
        submitHandler,
        isLoading
    };
}