import { baseURL } from '../variables.js';

async function getUser(userName) {
    const response = await fetch(`${baseURL}/users/${userName}`);
    return await response.json();
}

export { getUser };
