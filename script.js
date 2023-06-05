const enter = document.getElementById("enter");
const close_error = document.getElementById("button-error");


const user = {
    // The id format is (RRR) for the region of origin, (OO) for the owner of the box,
    // and (XXXXXXX) for the trainer id
    trainer_id: "033741234567" ,
    passoword: "nick"
};

const users = JSON.parse(localStorage.getItem('database_users')) ?? [user];


function setError() {
    let error_message = document.getElementById("error-message");
    error_message.setAttribute('style', 'display: flex');
}

function closeError() {
    let error_message = document.getElementById("error-message");
    error_message.removeAttribute('style', 'display: flex');
}

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

enter.addEventListener('click', enterClicked);
close_error.addEventListener('click', closeError);