//Exercice 1:
//Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.

function addition(x,y){
    if (typeof x !== "number" || typeof y !== "number") {
        return "Erreur : veuillez entrer deux nombres!";
    }
    return x+y;
};

//Exercice 2
//Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.

function minuteToSecondminute(){
    let minuteToSecond = minute * 60;
    console.log(minuteToSecond);
};

//Exercice 3:

//Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.

function increment(nombre){
    let increment = nombre++;
    console.log(increment);
};

//Exercice 4:
//Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2

function triangle(x,y){
    let triangle = x * y / 2;
    console.log(triangle);
};

//Exercice 5:

//Écrivez un programme JavaScript pour inverser une chaîne de caractères.

function strReverse(str) {
    function strReverse(n){
    return ++n;
    }
};

//Exercice 6:
//Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

function getMax(a, b, c){
    max = 0;
    if (a > b){
      max = a;
    } 
    else{
      max = b;
    }
    if (c > max){
      max = c;
    }
    return max;
  };

//Exercice 7:
//Créez une fonction qui prend un tableau et renvoie le premier élément. 
//Notez que le premier élément d’un tableau commence toujours par l’index 0.

// function getFirst(tab) {
//     let getFirst[0]
//     return getFirst;
// }

//Exercice 8:
//Écrivez un programme JavaScript pour récupérer l’URL d’un site Web

function getURL(url){
    let getURL = url;
    return getURL;
};

//Exercice 9:

//Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. 
//Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. 
//Deux nombres sont transmis comme paramètres. Le premier paramètre divisé par le deuxième paramètre.

function resteDiv(a, b) {
    let div = a/b;
    return div;
};
