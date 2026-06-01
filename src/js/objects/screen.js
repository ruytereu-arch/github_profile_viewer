const screen = {
    userProfile: document.querySelector('.profile-results'),
    renderUser(user) {
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
            </div>`;
    },
    renderNotFound(userName) {
        this.userProfile.innerHTML = "";
        alert(`usuário ${userName} não encontrado. Verifique o nome do usuário e tente novamente.`);
    }
}

export { screen };
