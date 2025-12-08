import { useState, useEffect } from "react";
import { getInteractions, createComment, addLike, removeLike, deleteComment } from "../services/interactions";
import { fetchGame, updateGameLikes } from "../services/games";

export function useInteractions(gameId, user) {
    const [interactions, setInteractions] = useState({ likes: [], comments: [], likesCount: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!gameId) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const [interactionData, gameData] = await Promise.all([
                    getInteractions(gameId),
                    fetchGame(gameId)
                ]);
                setInteractions({
                    ...interactionData,
                    likesCount: gameData.likes
                });
            } catch (err) {
                alert("There was a problem with loading likes and comments.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [gameId]);

    const addCommentHandler = async (text) => {
        if (!user) return;
        const updated = await createComment(gameId, user, text);
        setInteractions(prev => ({ ...prev, comments: updated.comments }));
    };

    const toggleLikeHandler = async () => {
        if (!user) return;

        const userAlreadyLiked = interactions.likes.includes(user._id);

        const updatedInteractions = userAlreadyLiked ? await removeLike(gameId, user) : await addLike(gameId, user);
        const newLikesCount = userAlreadyLiked ? Math.max(interactions.likesCount - 1, 0) : interactions.likesCount + 1;
        await updateGameLikes(gameId, newLikesCount);

        setInteractions({
            ...updatedInteractions,
            likesCount: newLikesCount
        });
    };
    const deleteCommentHandler = async (commentKey) => {
        if (!user) return;

        const updated = await deleteComment(gameId, commentKey);
        setInteractions(prev => ({ ...prev, comments: updated.comments }));
    };

    return {
        interactions,
        loading,
        addComment: addCommentHandler,
        toggleLike: toggleLikeHandler,
        likesCount: interactions.likesCount,
        userHasLiked: interactions.likes.includes(user?._id),
        deleteCommentHandler
    };
}