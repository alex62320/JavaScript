// exo 2 : --formulaire d’inscription + début validation--
// .Créer une classe User, avec comme parametres firstname, lastname, address ( fname = prénom , lname = nom)
// .Formulaire contenant LES champS nom , prénom, addresse , ces champs sont obligatoires
// .stocker ces données dans une nouvelle instance d’objet
// .passer toutes les valeurs en minuscule , exemple prénom KéViN deviendra kévin
// .un petit peu de css pour le message de confirmation

class User{
    constructor(firstName,lastName,adresse){
        this.firstName = firstName;
        this.lastName = lastName;
        this.adresse = adresse;
    }
}

let bdd = [];

function newUser(){
    let firstName = document.getElementById("firstname").value.toLowerCase();
    let lastName = document.getElementById("lastName").value.toLowerCase();
    let adress = document.getElementById("adresse").value.toLowerCase();

    bdd.push(new User(firstName,lastName,adress));
    console.log(bdd[0]);
}
