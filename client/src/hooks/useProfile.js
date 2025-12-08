import { useEffect, useState } from "react";
import { fetchGames } from "../services/games";
import { getInteractions } from "../services/interactions";

export function useProfile(user) {
    const [ownedGames, setOwnedGames] = useState([]);
    const [likedGames, setLikedGames] = useState([]);
    const [userComments, setUserComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?._id) return;

        const loadProfileData = async () => {
            try {
                const gamesData = await fetchGames();

                const allGames = Object.entries(gamesData).map(([id, game]) => ({
                    _id: id,
                    ...game
                }));
                const owned = allGames.filter(g => g._ownerId === user._id);

                const interactions = await Promise.all(
                    allGames.map(game => getInteractions(game._id))
                );

                const likes = [];
                const comments = [];

                interactions.forEach((interaction, index) => {
                    const game = allGames[index];

                    if (interaction.likes.includes(user._id)) {
                        likes.push({
                            gameId: game._id,
                            title: game.title
                        });
                    }

                    interaction.comments.forEach(comment => {
                        if (comment.userId === user._id) {
                            comments.push({
                                gameId: game._id,
                                gameTitle: game.title,
                                text: comment.text,
                                date: comment.date
                            });
                        }
                    });
                });

                setOwnedGames(owned);
                setLikedGames(likes);
                setUserComments(comments);
            } catch (err) {
                alert("Profile loading failed.");
            } finally {
                setLoading(false);
            }
        };

        loadProfileData();
    }, [user]);

    return {
        ownedGames,
        likedGames,
        userComments,
        loading
    };
}