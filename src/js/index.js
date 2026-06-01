const baseURL = "https://api.github.com"


const btnSearch = document.getElementById('btn-search'); //testar com querySelector
const inputSearch = document.getElementById('input-search');//estar com querySelector
// const profileResults = document.getElementsByClassName('profile-results'); // pega todos os elementos da classe, não cria array automáticamente e exige indicação de qual referência á classe usar, [0] neste caso.
const profileResults = document.querySelector('.profile-results'); //captura apenas a primeira referência à classe. mais simples.

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {

    try {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
            
        // Aqui você pode chamar as funções para buscar os dados do usuário
    
        const response = await fetch(`${baseURL}/users/${userName}`);

        if (!response.ok) {
            profileResults.innerHTML = "";
            alert(`usuário ${userName} não encontrado. Verifique o nome do usuário e tente novamente.`);
            return;
        }

        const user_profile = await response.json();

        // const user_avatar = user_profile.avatar_url
        // const user_name = user_profile.name
        // const user_bio = user_profile.bio
        // const user_followers = user_profile.followers
        // const user_following = user_profile.following

        // console.log(`name: ${user_name}; followers: ${user_followers}; following: ${user_following}`); // para validar obtenção de dados

        profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${user_profile.avatar_url}" alt="avatar de ${user_profile.name}"
            class="profile-avatar">

            <div class="profile-info">
                <h2>${user_profile.name}</h2>
                <p>${user_profile.bio || "Biografia não disponível"}</p>
            </div>
            
        </div>`;
        
    }catch(error) {
        profileResults.innerHTML = "";
        console.error(`Erro ao buscar perfil do usuário`, error);
        alert(`Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.`);

    } 
    } else {
        alert(`Por favor, digite um nome de usuário do GitHub.`);
    }       
});


// inputSearch.addEventListener('keyup', (enter) => {
//     const userName = enter.target.value;
//     const key = enter.which || enter.keyCode;
//     const isEnterKeyPressed = key === 13; // 13 - valor da técla enter; permite buscar ao precionar enter

//     if (isEnterKeyPressed) {
//         console.log(userName);
//         // Aqui você pode chamar as funções para buscar os dados do usuário
//     }
// });
 