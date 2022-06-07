function affExo(exoNumber) {
    console.log('======= EXO ' + exoNumber + ' =======');
}
 
function affEndExo(exoNumber) {
    console.log('--- END ' + exoNumber + ' ---');
}
 
affExo('A');
// objet A . 
// 1 . créer une objet personne, qui contiendra les valeurs : le prénom , le nom, l'age, la nationalité
// 2 . créer une méthode "dire bonjour" qui retourne "bonjour " suivi du nom et du prénom.
// 3 . créer le constructeurs ( setters )
// 4 . instancier 3 personnes, avec des caractéristiques différentes
// 5 . créer une METHODE "frenchCheck" qui retourne TRUE si la nationalité de la personne est STRICTEMENT EGALE A française.
 
// 1
let personne = {
    firstName: "Exemple",
    lastName: "Jean",
    age: 16,
    nationality: "FRA",
    type: "NOT HUMAN"
}
 
//TEST DATA A.1
console.log(typeof(personne));
console.log(personne.firstName);
console.log(personne.lastName);
console.log(personne.age);
console.log(personne.nationality);
console.log(personne.type);
// END TEST DATA A.1
 
// 1 + 3
class Personne {
    constructor(firstName, lastName, age, nationality) {
        // setters
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.nationality = nationality;
    }
 
    // fonction dire bjr
    sayHello() {
        console.log('Hello Mr.', this.lastName, this.firstName);
    }
 
    frenchCheck() {
        if (this.nationality === 'FRA') {
            return true;
        } else {
            return false;
        }
    }
 
}
 
// 4
let user1 = new Personne('Dupont', 'Michel', 21, 'FRA');
let user2 = new Personne('Shevchenko', 'Andriy', 45, 'UKR');
let user3 = new Personne('Balboa', 'Rocky', 30, 'USA');
 
user3.sayHello();
 
console.log(user1.nationality);
//mixer des " et des ' est possible dans les logs , mais déconseillé afin de pouvoir échapper l'autre caractère plus facilement
console.log(user2.firstName, user2.lastName, '(', user2.nationality, ')', " is a footballer having played for his national team, etc he's", user2.age, "years old.");
affEndExo('A');
 
console.log(user1.frenchCheck());
console.log(user2.frenchCheck());
console.log(user3.frenchCheck());
 

// B .
affExo("B");
affEndExo("B");
// 1. Créer une classe livre qui contiendra les proprietés : nom, auteur, prix
// 2. instancier 2 livres
// 3. constructeurs + fonction qui retourne tout les champs:valeurs sous forme de console.log
// 4. créer une fonction qui compare le prix de deux livres et affiche le nom du moins cher
// 5. rajouter une PROPRIETE devise, nos livres ne seront vendus que dans un language, par défaut ils seront vendus en euros ( les euros €, dollars us $, livres sterling £ , rouble russe RUB dans un tableau ) , 
//    rajouter cette propriété manuellement pour chaque livre
// 6. GENERATEUR DE TESTS, PEUT ETRE UTILISE POUR DES TESTS DE CHARGE -> intro aux TUs
//    créer une fonction ( EXTERNE A L'OBJET) qui va générer 5 livres du meme auteur ( nom différent de 1 caractère minimum, indice), ayant tous un prix différent, tous étant de la meme currency
 
 
//1 classe livre
class Book {
    constructor(name, author, price) {
            // 2 setters class livre
            this.name = name;
            this.author = author;
            this.price = price;
            //5
            this.currency = "€"
        }
    // 3 fonction affichage
    displayBookLog() {
        console.log('-displayBookLog()- Nom du livre : ' + this.name +
            ' , auteur : ' + this.author +
            ' , price : ' + this.price +
            ' , currency : ' + this.currency);
    }
}
 

// 2.instanciation de 2 livres + data test
let livre_test_1 = new Book('Les frères kazamarov', 'Fyodr Dostoyevsky', 40);
console.log('+++livre 1 : ',
    livre_test_1.name,
    livre_test_1.author,
    livre_test_1.price, '+++');
 
let livre_test_2 = new Book('La république', 'Platon', 100);
console.log('+++livre 2 : ',
    livre_test_2.name,
    livre_test_2.author,
    livre_test_2.price, '+++');
 
// 3 fonction affichage
livre_test_2.displayBookLog();

function displayBookLog(param){
    console.log("SAAAAAAAAALUUUUUUUUUT" + param.name)
}
displayBookLog(livre_test_1);
 
//4
function comparePrice(book1, book2) {
    if (book1.price > book2.price) {
        console.log(book2.name + ' est moins cher que ' + book1.name);
    } else if (book1.price === book2.price) {
        console.log("prix egal");
    } else {
        console.log(book1.name + ' est moins cher que ' + book2.name);
    }
}
 
comparePrice(livre_test_2, livre_test_1);
comparePrice(livre_test_1, livre_test_2);
 
//5
let currrencyTable = ['€', '$', '£', 'RUB'];
livre_test_1.currency = currrencyTable[3];
livre_test_1.displayBookLog();
livre_test_1.price = 9999.99;
livre_test_1.displayBookLog();
console.log(livre_test_1.name + ' : ' + livre_test_1.currency + ' ' + livre_test_1.price);
console.log('livre 2 currency : ' + livre_test_2.currency);
livre_test_2.displayBookLog();
 
affExo("B6")
console.log('-test data-');
// 6. PARTIE GENERATEUR DE TESTS, PEUT ETRE UTILISE POUR DES TESTS DE CHARGE -> intro aux TUs
//    créer une fonction ( EXTERNE A L'OBJET) qui va générer 5 livres du meme auteur ayant tous un prix différent, tous étant de la meme currency ( on en a une par défaut)
//    ces données sont bidon et c'est ok si elles sont imprécises, du moment que vous vous y retrouviez
//    BONUS : rajouter un champ currency ( optionel ) dans la fonction, qui change la currency des livres générés au lieu de l'€ habituel par défaut
//    constructeur du livre rappel : (name, author, price, currency)
//    SIGMA GRINDSET BONUS : rajouter 2 livres d'un autre auteur, et donc avec une autre devise ...ahem... CURRENCY
function bookGenerator(author, currency) {
    book1 = new Book('La chute de la république romaine', author, 11);
    book2 = new Book('Sur sparte', author, 22);
    book3 = new Book('Les vies romaines', author, 33);
    book4 = new Book('Les vies des nobles grecs', author, 44);
    book5 = new Book("L'age d'alexandre", author, 55.87);
    // // SIGMA GRINDSET BONUS 
    bookUS1 = new Book('livre us$', 'Mark Twain', currrencyTable[1]);
    bookUS2 = new Book('livre us$ ', 'Mark Twain', currrencyTable[1]);
}
 
bookGenerator('Marcus Aurelius', currrencyTable[1]);
book1.displayBookLog();
book2.displayBookLog();
book3.displayBookLog();
bookUS1.displayBookLog();
bookUS2.displayBookLog();
 
affEndExo('B6');
console.log('-test data end-');