
export async function getInteractions(gameId) {
    const res = await fetch(`http://localhost:3030/jsonstore/interactions/${gameId}`);
    if (res.status === 404) {
        const initial = { _id: gameId, likes: [], comments: [] };
        const createRes = await fetch(`http://localhost:3030/jsonstore/interactions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(initial)
        });
        if (!createRes.ok) throw new Error("Failed to create initial interactions");
        return initial;
    }
    const data = await res.json();
    return {
        _id: gameId,
        likes: data.likes ?? [],
        comments: data.comments ?? [],
        likesCount: data.likes?.length ?? 0
    };
}

export async function createComment(gameId, user, text) {
    if (!user || !user._id) throw new Error('User must be logged in to comment');
    if (!text || text.trim() === '') throw new Error('Comment text cannot be empty');
    const current = await getInteractions(gameId);
    const newComment = {
        userId: user._id,
        text: text.trim(),
        date: Date.now()
    };
    const updatedComments = [...current.comments, newComment];
    const res = await fetch(`http://localhost:3030/jsonstore/interactions/${gameId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comments: updatedComments })
    });
    if (!res.ok) throw new Error('Failed to add comment');
    return { ...current, comments: updatedComments };
}

export async function addLike(gameId, user) {
    if (!user || !user._id) throw new Error('User must be logged in to like');
    const current = await getInteractions(gameId);
    const updatedLikes = current.likes.includes(user._id) ? current.likes : [...current.likes, user._id];
    const res = await fetch(`http://localhost:3030/jsonstore/interactions/${gameId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: updatedLikes })
    });
    if (!res.ok) throw new Error('Failed to add like');
    return { ...current, likes: updatedLikes };
}

export async function removeLike(gameId, user) {
    if (!user || !user._id) throw new Error('User must be logged in to remove like');
    const current = await getInteractions(gameId);
    const updatedLikes = current.likes.filter(uid => uid !== user._id);
    const res = await fetch(`http://localhost:3030/jsonstore/interactions/${gameId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: updatedLikes })
    });
    if (!res.ok) throw new Error('Failed to remove like');
    return { ...current, likes: updatedLikes };
}

export async function deleteComment(gameId, commentKey) {
    const current = await getInteractions(gameId);
    const updatedComments = current.comments.filter(c => (c.userId + c.date) !== commentKey);
    const res = await fetch(`http://localhost:3030/jsonstore/interactions/${gameId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comments: updatedComments })
    });
    if (!res.ok) throw new Error("Failed to delete comment");
    return { ...current, comments: updatedComments };
}