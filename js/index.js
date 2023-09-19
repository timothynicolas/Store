let email = document.forms['form']['email'];
let password = document.forms['form']['password']

let email_error = document.getElementById('email_error');
let password_error = document.getElementById('password_error');

email.addEventListener('input', email_Verify);

email.addEventListener('input', email_Verify);
password.addEventListener('input', password_Verify);

function email_Verify(){
    if(email.value.length >= 8){
        email.style.border = '1px solid silver';
        email_error.style.display = 'none';

    }
}

function password_Verify(){
    if(password.value.length >= 10){
        password.style.border = '1px solid silver';
        password_error.style.display = 'none';
        
    }
}


function validated(){
    if(email.value.length < 8){
        email.style.border = '1px solid red';
        email_error.style.display = 'none';
        email.focus();
        email_Verify();
        return false;
       
    }
    if(password.value.length < 10){
        password.style.border = '1px solid red';
        password_error.style.display = 'none';
        password.focus();
        password_Verify();
        return false;
       
    }
}