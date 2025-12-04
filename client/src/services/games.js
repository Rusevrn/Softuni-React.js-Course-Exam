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

export async function createGame(data) {
    const response = await fetch(`http://localhost:3030/jsonstore/games`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('failed to create game');
    return response.json();
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
    return response.json();
}