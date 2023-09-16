const FormVerification = () => {

    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const clientele = document.getElementById('clientele');
    const budget = document.getElementById('budget');
    const tel = document.getElementById('tel');
    const email = document.getElementById('email');
    const objet = document.getElementById('objet');
    const description = document.getElementById('description');

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const clienteleValue = clientele.value.trim();
    const budgetValue = budget.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();
    const objetValue  = objet.value.trim();
    const descriptionValue = description.value.trim();

    let noError = true;

    if(prenomValue === '') {
        setError(prenom, 'Champs vide');
        noError = false;
    } else {
        setSuccess(prenom);
    }



    if(nomValue === '') {
        setError(nom, 'Champs vide');
        noError = false;
    } else {
        setSuccess(nom);
    }


    if(clienteleValue === '') {
        setError(clientele, 'Champs vide');
        noError = false;
    } else {
        setSuccess(clientele);
    }


    if(budgetValue === '') {
        setError(budget, 'Champs vide');
        noError = false;
    } else {
        setSuccess(budget);
    }


    if(telValue === '') {
        setError(tel, 'Champs vide');
        noError = false;
    } 
    else if(!TelValidation(telValue)){
        setError(tel,'Erreur ( exp : 514 333 4040 ) ');
        noError = false;
    }
    else {
        setSuccess(tel);
    }


    if(emailValue === ''){
        setError(email,'Champs vide');
        noError = false;
    }
    else if(!EmailVerification(emailValue)){
        setError(email,'Erreur');
        noError = false;
    }
    else{
        setSuccess(email);
    }


    if(objetValue === '') {
        setError(objet, 'Champs vide');
        noError = false;
    } else {
        setSuccess(objet);
    }


    if(descriptionValue === '') {
        setError(description, 'Champs vide');
        noError = false;
    } else {
        setSuccess(description);
    }

    console.log(noError);
    return noError;
}


function EmailVerification(email) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
}

function TelValidation(tel) {
    const regexTel = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return regexTel.test(String(tel).toLowerCase());
}

const setError = (element,message) => { 
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

