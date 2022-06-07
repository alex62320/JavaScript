// exo d'algo + JS manip des nombres - intro TU
 
// cette PROCEDURE ( elle ne retourne rien, on n'en a pas besoin)
// vous permet d'écrire aff au lieu de console.log à chaque fois, une sorte d' ALIAS si vous voulez
// volontairement séparée pour l'instant, c'est un processus utilisé dans les TESTS UNITAIRES
// vos données de tests sont préremplies par votre humble serviteur ( pas toujours ) via aff, attention, il ne prend qu'un seul argument.
 
function aff(a) {
    console.log(a);
}
 
aff("Il est vraiment trop fort ce Baptiste.");
console.log("Il est vraiment trop fort ce Baptiste.");
 
 

// EXO
console.log("1");
// Math.random() RETOURNE un NOMBRE aléatoire entre 0 et 1 (inclus),  and 1 (exclus)
// afficher un nombre aléatoire
 
//soluce
aff("a", Math.random());
 
 
// EXO
console.log("2");
// Donner un chiffre rond ( INTEGER ) aléatoire.
// un chiffre va de O à 9
 
// soluce
aff(Math.floor(Math.random() * 10));
 
 
console.log("3");
// Donner un nombre entier entre une nombre a  INCLUS et un nombre B EXCLUS
// Math.floor(argument) retourne un nombre entier.
 
// soluce
aff(Math.floor(Math.random()));
aff(Math.floor(12.3456));
 
console.log("4");
// Créer une fonction qui renvoie un nombre entier entre deux valeurs
 
// soluce
function integerBetween(a, b) {
    let result;
    result = Math.floor(Math.random() * (b - a + 1) + a);
    return result;
}
 
aff(integerBetween(0, 1));
aff(integerBetween(5, 10));
