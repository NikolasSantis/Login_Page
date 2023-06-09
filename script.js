
// Variáveis para os botões de 'Entrar' e 'Fechar' a mensagem de erro caso apareça
const enter = document.getElementById("enter");
const close_error = document.getElementById("button-error");


const user = {
    // The id format is (RRR) for the region of origin, (OO) for the owner of the box,
    // and (XXXXXXX) for the trainer id
    trainer_id: "033741234567" ,
    passoword: "nick"
};

// Bloco de funções da página 

// Irá fazer com que a mensagem de erro apareça
function setError() {
    let error_message = document.getElementById("error-message");
    error_message.setAttribute('style', 'display: flex');
}

// Irá 'Fechar' a mensagem de erro 
function closeError() {
    let error_message = document.getElementById("error-message");
    error_message.removeAttribute('style', 'display: flex');
}

// Irá fazer a verificação de login, caso contenha dados incorretos, 
// chamará a função de mensagem de erro 'setError'
function enterClicked() {
    let trainer_id = document.getElementById("trainer_id");
    let password = document.getElementById("password");

    trainer_id = trainer_id.value;
    password = password.value;

    if (trainer_id == user.trainer_id && password == user.passoword) {
        alert('Successful login');
        closeError();
    }
    else { 
        setError();
    }
}

// Bloco de eventos na página

// Eventos de click, para o botão de 'Enter' e o 'X' da mensagem de erro  
enter.addEventListener('click', enterClicked);
close_error.addEventListener('click', closeError);