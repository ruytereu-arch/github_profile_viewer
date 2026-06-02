const screen = {
    userProfile: document.querySelector('.profile-results'),
    renderUser(user, repositories = []) {
        this.userProfile.innerHTML = `
            <div class="profile-card">
                <img src="${user.avatar_url}" alt="avatar de ${user.name}"
                class="profile-avatar">

                <div class="profile-info">
                    <h2>${user.name ?? 'Não possui nome cadastrado 😢'}</h2>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                </div>
            </div>

            <div class="profile-counters">
                <div class="followers">
                    <h4>Seguidores</h4>
                    <span>${user.followers}</span>
                </div>
                <div class="following">
                    <h4>Seguindo</h4>
                    <span>${user.following}</span>
                </div>
            </div>

            ${this.renderRepositories(repositories)}`;
    },
    renderRepositories(repositories) {
        const repositoriesList = Array.isArray(repositories) ? repositories : [];

        if (repositoriesList.length === 0) {
            return `<p class="repositories-empty">Este usuário não possui repositórios públicos.</p>`;
        }

        const repositoriesItems = repositoriesList.map(repo => `
            <li>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                    <h4>${repo.name}</h4>
                    <div class="repository-info">
                        <span>⭐ Stars: ${repo.stargazers_count}</span>
                        <span>🍴 Forks: ${repo.forks_count}</span>
                        <span>👀 Watchers: ${repo.watchers_count}</span>
                        <span>💻 Language: ${repo.language ?? 'Sem linguagem'}</span>
                    </div>
                </a>
            </li>`).join('');

        return `
            <div class="repositories">
                <h3>Repositórios</h3>
                <ul>${repositoriesItems}</ul>
            </div>`;
    },
    renderNotFound(userName) {
        this.userProfile.innerHTML = "";
        alert(`usuário ${userName} não encontrado. Verifique o nome do usuário e tente novamente.`);
    }
}

export { screen };
