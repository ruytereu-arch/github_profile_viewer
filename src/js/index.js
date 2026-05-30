const baseURL = "https://api.github.com"


const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {

    try {
            
        // Aqui você pode chamar as funções para buscar os dados do usuário
    
        const response = await fetch(`${baseURL}/users/${userName}`);

        if (!response.ok) {
            alert(`usuário ${userName} não encontrado. Verifique o nome do usuário e tente novamente.`);
            return;
        }

        const user_profile = await response.json();
        console.log(user_profile); // para validar obtenção de dados
        
    }catch(error) {
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


