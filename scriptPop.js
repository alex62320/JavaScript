// let x= 15;
// let y= 7 ;
// let soustraction = x - y;

// let bjr = "Madame, monsieur";
// console.log(bjr + +prenom)
// let a = 25
// let b= 14
// let c= 6

// let addition= a + b;
// let division = addition / c;

// let age = 10;
// prenom= dylan;

// if(age >= 10){
//     console.log("Bienvenue")
// };

window.alert("Interdit au moins de 10 ans");


// exo 2
// fonction dit "bonjour + " prénom
function sayHello(name) {
    console.log("bonjour", name);
}

sayHello("myriam");

// exo3
// procédure d'addition de 3 chiffres, afficher le résultat dans la console


function addition(a,b,c){
    console.log(a+b+c)
};
console.log(addition());
// (console.log("exo3"));




// exo 4
// retourner la valeur d'une addition de 2 chiffres,
// stockés dans une variable qui sera retournée puis affichée
( 
    function (a, b){
        let a = 5, b = 7;
        return a + b;
    }
);
console.log(exo4);
// exo5
// calculer majorité, afficher bienvenue si SUPERIEUR ou EGAL A 18 ans,
// afficher "allez vous en" si moins de 18
function majeur(age) {
    if (age >= 18) {
        console.log("majeur");
    } else {
        console.log("mineur");
    }
};
// exo6
// retourner un booléen relatif a la majorité de la personne

// exo7
// calculer majorité mais demander une carte d'identité si la personne à entre 18 et 25 ans