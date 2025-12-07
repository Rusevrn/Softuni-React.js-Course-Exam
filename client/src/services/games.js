export async function fetchGame(_id) {
    const response = await fetch(`http://localhost:3030/jsonstore/games/${_id}`);

    if (!response.ok) throw new Error('failed to fetch game by id');
    return response.json();
}

export async function fetchGames() {
    const response = await fetch(`http://localhost:3030/jsonstore/games`);

    if (!response.ok) throw new Error('failed to fetch games');
    return response.json();
}

export async function updateGameLikes(_id, likesCount) {
    const res = await fetch(`http://localhost:3030/jsonstore/games/${_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes: likesCount })
    });
    if (!res.ok) throw new Error("Failed to update game likes");
    return res.json();
}

export async function createGame(data) {
    const response = await fetch(`http://localhost:3030/jsonstore/games`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create game');
    const createdGame = await response.json();
    const allRes = await fetch(`http://localhost:3030/jsonstore/interactions`);
    const allInteractions = await allRes.json();
    const newInteraction = {
        _id: createdGame._id,
        likes: [],
        comments: []
    };
    const merged = { ...allInteractions, [createdGame._id]: newInteraction };
    await fetch(`http://localhost:3030/jsonstore/interactions`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(merged)
    });
    return createdGame;
}

export async function updateGame(id, data) {
    const response = await fetch(`http://localhost:3030/jsonstore/games/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('failed to update game');
    return response.json();
}

export async function deleteGame(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/games/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('failed to delete game');
    const interactionRes = await fetch(`http://localhost:3030/jsonstore/interactions/${id}`, {
        method: 'DELETE'
    });
    if (!interactionRes.ok) console.warn('Failed to delete interaction object');
    return response.json();
}

export async function toggleVerifyGame(id, isVerified) {
    const res = await fetch(`http://localhost:3030/jsonstore/games/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isVerified: !isVerified })
    });
    if (!res.ok) {
        throw new Error("Failed to toggle verification");
    }
    return res.json();
}