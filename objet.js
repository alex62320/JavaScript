// objet 
// A . 
// 1 . créer une objet personne, qui contiendra les valeurs : le prénom , le nom, l'age, la nationalité
// 2 . créer une méthode "dire bonjour" qui retourne "bonjour " suivi du nom et du prénom.
// 3 . créer le constructeurs ( setters )
// 4 . instancier 3 personnes, avec des caractéristiques différentes
// 5 . créer une METHODE "frenchCheck" qui retourne TRUE si la nationalité de la personne est STRICTEMENT EGALE A française.

//part 1
let alexandre ={
    prenom : "alexandre",
    nom : "chuffart",
    age : 25,
    nationalite : "Française",
    sayHi() {
        console.log("Bonjour" + this.prenom + this.nom);
    }
};
console.log(alexandre)


function personne(prenom,nom,age,nationalite){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.nationalite = nationalite; 
};

let youceff = new personne("Youceff","nemmiche",19,"Française");
console.log(youceff);

let hugo = new personne("hugo","soual",20,"polonaise");
console.log(hugo);

function FrenchCheck(personne){
    if(personne.nationalite === "Française"){
        return "true";
    }
    else{
        return "false";
    }
};

//Correction//Correction//Correction//Correction//Correction//Correction//Correction

//objet personneDirect sans classe
let personneDirect= {
    firstName : "Jean",
    lastName : "Exemple",
    age : 16,
    nationality: "FRA",
    type : "NOT HUMAN",


};

console.log(typeof(personneDirect));
//classe d'objet personne
class Personne{
    constructor (firstName, lastName, age, nationality){
        //setter
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.nationality = nationality;
    }
    //dire bonjour avec nom prenom 

    sayHello(){
        console.log("Bonjour" + " " +this.firstName + " " +this.lastName)
    }
};

// instancier 3 personne 

let user1 = new Personne("toto","dupont",21,"FRA");
let user2 = new Personne("andriy","Shevchenko",45,"UKR");
user1.sayHello();


// B.
// 1. Créer une classe livre qui contiendra les proprietés : nom, auteur, prix
// 2. instancier 2 livres
// 3. constructeurs + fonction qui retourne tout les champs:valeurs sous forme de console.log
// 4. créer une fonction qui compare le prix de deux livres et affiche le nom du moins cher
// 5. rajouter une PROPRIETE devise, nos livres ne seront vendus que dans un language, par défaut ils seront vendus en euros ( les euros €, dollars us $, livres sterling £ , rouble russe RUB dans un tableau ) , 
//    rajouter cette propriété manuellement pour chaque livre
// 6. PARTIE GENERATEUR DE TESTS, PEUT ETRE UTILISE POUR DES TESTS DE CHARGE -> intro aux TUs
//    créer une fonction ( EXTERNE A L'OBJET) qui va générer 5 livres du meme auteur ayant tous un prix différent, tous étant de la meme currency ( on en a une par défaut)
//    ces données sont bidon et c'est ok si elles sont imprécises, du moment que vous vous y retrouviez
//    BONUS : rajouter un champ currency ( optionel ) dans la fonction, qui change la currency des livres générés au lieu de l'€ habituel par défaut
//    constructeur du livre rappel : (name, author, price, currency)
//    SIGMA GRINDSET BONUS : rajouter 2 livres d'un autre auteur, et donc avec une autre devise ...ahem... CURRENCY

let livre1 ={
    nom: "livre1",
    auteur: "moi",
    prix: 19.99,
    devise: "€",
};

function livre(nom,auteur,prix){
    this.nom = nom;
    this.auteur= auteur;
    this.prix= prix;
    this.currency = "€";
};

let livre2 = new livre("livre2","a1",25.00);
let livre3 = new livre("livre3","lorem",45.88);
console.log(livre1,livre2,livre3);



function checkPrice(livre1,livre2){
    if(livre1.prix > livre2.prix){
        return livre1.name;
    }
    else if(livre1.prix < livre2.prix){
        return livre2.name;
    }
    else{
        return livre1.name,"et",livre2.name
    }
};

let currency = ["€","$","£","RUB"];

console.log("le prix du livre est de "+livre1.price+currency[0]);

// correction // correction // correction // correction // correction // correction 


class Book{
    constructor(name, autor, price){
        this.name = name;
        this.autor = autor;
        this.price = price;
    }
    displayBookLog(){
        console.log("+++ nom du livre : +++",
        this.name,
        this.autor,
        this.price,
        "+++")
    }
};

let livretest1 = new Book('les frère kazamarov','Fyodr dostoyesvsky',40);
let livretest2 = new Book('La république','platon',50);

console.log("+++ livre test 1 : +++",
livretest1.name,
livretest1.autor,
livretest1.price,
"+++")

console.log(livretest2)

function checkPrice(book1,book2){
    if(book1.prix > book2.prix){
        console.log("le livre le moins cher est : " + book2.name);
    }
    else if(book1.prix < book2.prix){
        console.log("le livre le moins cher est : " + book1.name);
    }
    else{
        console.log("le livre le moins cher sont : " + book1.name+" et "+book2.name)
    }
};

// currency 
let currencyTable= ["€","$","£","RUB"];
livretest2.currency = currencyTable[2];
console.log(livretest2)

// testdata generator
function bookGenerator(author){
    book1 = new Book('la chute de la république romaine', author,35);
    book2 = new Book('chute empire romain', author,1);
    book3 = new Book('chute de L urss', author,341);
    book4 = new Book('vie de youceff', author,77);
    book5 = new Book("l'age d'alexandre", author,55);
}

bookGenerator("plutarch");

book1.displayBookLog();

// Une id est un identifiant unique, comme votre numéro de sécu, y'en a JAMAIS DEUX PAREIL ( parfois, c'est tant mieux)
// C. 1. Créer une classe Article, qui contiendra les propriété suivantes : id ( NUMERO identifiant), nom , prix , description de l'objet, imagelink ( sous forme de string)
// avec son constructeur bien évidemment
// 2 . créer une méthode articleLog() qui affichera les proriétés de l'article
// 3 . instancier 2 articles, avec une id, un nom, un prix, une description
// 4 . créer une fonction articleGeneratorTestData() et déplacer vos instances 
// d'article dedans, remplacer les id fait à la main par des l'indicateur de boucle "i"
//
// 5 . créer une METHODE qui ajoute UN lien url d'image à imageLink, attention au nommage
// 6 . rajouter une propriété imagesLink /!\ pluriel à l'objet Article ayant comme valeur un tableau de STRING
//   . rajouter en dur images Link à un article , modifier les constructeurs, articleLog etc en conséquence
//   . vous venez de comprendre l'intéret de la conception et de la dette technique

class Article {
    constructor(id,price,description,image){
        this.id = id;
        this.price = price;
        this.description = description;
        this.imageslinks = imageslinks;
    }
    articlelog(){
        console.log("+++ livre test 1 : +++",
        this.id,
        this.price,
        this.description,
        this.imageslinks,
        "+++")
    }
}

let imagesLinks = ["https://observatoire-des-aliments.fr/wp-content/uploads/2013/01/pomme-de-terre.jpg","https://cdn.pratico-pratiques.com/app/uploads/sites/4/2020/07/21100958/gateau-opera.jpg"]


    let patate = new Article (j++,100,"pomme de terre","https://observatoire-des-aliments.fr/wp-content/uploads/2013/01/pomme-de-terre.jpg");
    let gateau = new Article (j++,150,"gateau au chocolat","https://cdn.pratico-pratiques.com/app/uploads/sites/4/2020/07/21100958/gateau-opera.jpg");

function articleGeneratorTestData(n){
    patate = new Article (j++,100,"pomme de terre","https://observatoire-des-aliments.fr/wp-content/uploads/2013/01/pomme-de-terre.jpg");
    gateau = new Article (j++,150,"gateau au chocolat","https://cdn.pratico-pratiques.com/app/uploads/sites/4/2020/07/21100958/gateau-opera.jpg");
}
articleGeneratorTestData();

/////correction
// Une id est un identifiant unique, comme votre numéro de sécu, y'en a JAMAIS DEUX PAREIL ( parfois, c'est tant mieux)
// C. 1. Créer une classe Article, qui contiendra les propriété suivantes : id ( NUMERO identifiant), nom , prix , description de l'objet, imagelink ( sous forme de string)
// avec son constructeur bien évidemment
// 2 . créer une méthode articleLog() qui affichera les proriétés de l'article
// 3 . instancier 2 articles, avec une id, un nom, un prix, une description
// 4 . créer une fonction articleGeneratorTestData() et déplacer vos instances d'article dedans, remplacer les id fait à la main par des l'indicateur de boucle "i"
// 5 . créer une METHODE qui ajoute UN lien url d'image à imageLink, attention au nommage
// 6 . rajouter une propriété imageLinks /!\ pluriel à l'objet Article ayant comme valeur un tableau de STRING
//   . rajouter en dur imagesLink à un article , modifier les constructeurs, articleLog etc en conséquence
//   . vous venez de comprendre l'intéret de la conception et de la dette technique
 
// classe d'objet article
class Article {
    constructor(id, name, price, description, imageLink, imagesLink) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageLink = imageLink;
        // 6 . tableau d'images
        this.imagesLink = imagesLink;
 
        console.log('created :' + this.name + ' id:' + this.id);
    }
 
    // 2. log d'article
    articleLog() {
        console.log('+article : ' + this.name +
            ' , name :' + this.name +
            ' , price :' + this.price +
            ' , description :' + this.description +
            ' , imageLink :' + this.imageLink +
            ' , imagesLink :' + this.imagesLink);
    }
 
    // 5. add imageLink, attention au nommage
    setImagelink(singleUrlLink) {
        this.imageLink = singleUrlLink;
    }
 
}
// on laisse souvent l'article avec l'id 0 aux devs pour tester
let article0 = new Article(0, 'test zero', 10, 'desctext zero');
 
// 4. testdata generator
const testImagesLink = ["https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/252565_vignette_kalachnikov-ak-47.jpg?itok=0wRW8lIg",
    "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
    "https://www.lepoint.fr/images/2014/01/14/sipa-mikhail-kalachnikov-fusil-assaut-ak-47-mort-l-2343768-jpg_2018065_1250x625.JPG"
];
 
let j = 0;
function articleGeneratorTestData(n) {
        article1 = new Article(j++, 'AK-47', 1299.99, 'Cheap, reliable, you know what it is and we know why you want it.');
        article2 = new Article(j++, 'Cocaine, 1kg', 25000, 'From the jungles of our beloved Colombia to the highrise buildings of London or Shangai this fine white will take you anywhere, anytime.');
        article3 = new Article(j++, 'Corrupt politician, 1000kg', 1200000, 'Why kill your ennemies when it\'s way easier to buy them?.');
 
        //on rajoutera le reste des articles à la suite, dans cette fonction for, on n'aura pas d'id doubles
        articleImagesLinkOk = new Article(j++, 'toyota camry but its kalashnikov pictures', 20000, 'A warlord\'s classic', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg', testImagesLink)
}
articleGeneratorTestData(4);
//end exo 4
 
article0.articleLog();
 
// // 3. instances
// let article1 = new Article(1, 'AK47', 1299.99, 'Cheap, reliable, you know what it is and we know why you want it.');
// let article2 = new Article(2, 'Cocaine, 1kg', 25000, 'From the jungles of our beloved Colombia to the highrise buildings of London or Shangai this fine white will take you anywhere, anytime.')
// article1.articleLog();
// article2.articleLog();
 
 
console.log('test data gene');
articleImagesLinkOk.articleLog();
console.log('end test data gene');
 
// 6. imagesLink
article0.setImagelink("https://cdn.britannica.com/70/123170-050-D7AAF458/AK-47.jpg");
article0.imagesLink = ["https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/252565_vignette_kalachnikov-ak-47.jpg?itok=0wRW8lIg",
    "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
    "https://www.lepoint.fr/images/2014/01/14/sipa-mikhail-kalachnikov-fusil-assaut-ak-47-mort-l-2343768-jpg_2018065_1250x625.JPG"
]
article0.articleLog();