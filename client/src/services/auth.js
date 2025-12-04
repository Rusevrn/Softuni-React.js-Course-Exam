export async function login(data) {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('failed to login');
    return response.json();
}

export async function register(data) {
    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('failed to login');
    return response.json();
}

export async function logout(token) {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': token }
    });
    if(!response.status !== 204 ) throw new Error('failed to logout');
    return;
}

export async function pullUserDetails(token) {
    const response = await fetch('http://localhost:3030/users/me', {
        method: 'GET',
        headers: { 'X-Authorization': token }
    });
    if(!response.ok) throw new Error("failed to get user's details");
    return response.json();
}