import { baseURL } from '../variables.js';

async function getUser(userName) {
    const response = await fetch(`${baseURL}/users/${userName}`);
    return await response.json();
}

export { getUser };

async function getRepos(userName) {
    const response = await fetch(`${baseURL}/users/${userName}/repos?per_page=10&sort=created`);//"?"para adicionar argumento, 10 por página, ordenados  ultimp-Primeiro
    return await response.json();

}

export { getRepos };
