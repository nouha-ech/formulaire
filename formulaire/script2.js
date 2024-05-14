
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', validerFormulaire);
});


function validerFormulaire() {

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var motdepasse = document.getElementById('motdepasse').value;

   
    document.getElementById('messages').innerHTML = '';

   
    if (nom.trim() === '') {
        afficherMessageErreur('Le champ Nom est obligatoire.', 'nom');
    }

    if (prenom.trim() === '') {
        afficherMessageErreur('Le champ Prénom est obligatoire.', 'prenom');
    }

    if (email.trim() === '' || !email.includes('@')) {
        afficherMessageErreur('Veuillez fournir une adresse e-mail valide.', 'email');
    }

    if (motdepasse.length < 6) {
        afficherMessageErreur('Le mot de passe doit contenir au moins 6 caractères.', 'motdepasse');
    }
}

function afficherMessageErreur(message, champId) {
    var messageErreur = document.createElement('p');
    messageErreur.style.color = 'red';
    messageErreur.textContent = message;
    
    document.getElementById(champId).insertAdjacentElement('afterend', messageErreur);
}
