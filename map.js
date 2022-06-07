// map contenant des clefs:valeurs des codes ISO de devise, exemple :  EUR -> € , USD -> $
 
// créer une fonction( ou procédure , osef) qui retourne la traduction,   € , $ etc
 
// rajouter un vérificateur d'existence de devise dans le parametre de la fonction, sous forme de fenetre d'ALERTe de navigateur
 
const mapCurrency = new Map();

mapCurrency.set('EUR','€');
mapCurrency.set('USD','$');


function currencyTrad(ISO){
    if(mapCurrency.get(ISO)=== undefined){
        windows.alert('Currency not found :'+ISO)
    }
    return mapCurrency.get(ISO)
}

console.log(currencyTrad('EUR'));
console.log(currencyTrad('USD'))

// map dictionaire francais , clef:valeur -> mot : definition
// map dictionaire autre langue
// afficher tout le contenu de dico Francais via une boucle ( for de préférence)
// n'afficher que les MOTS ( ahem...clefs )SANS la définition du dico étranger
// fonction(ou procédure, choisissez, osef du nom) prenant en paramètre le 
// language de l'utilisateur et affichant le dictionaire dans le language choisi sous forme de log.

const dictionary = new Map();

dictionary.set('merguez','Saucisse fraîche fortement pimentée à base de bœuf ou de bœuf et de mouton et consommée grillée ou frite. (Spécialité d\'Afrique du Nord.)');
dictionary.set('fricadelle','En Belgique, boulette de viande hachée.')

const dictionaryEn = new Map();

dictionaryEn.set('merguez','spicy merguez sausage');
dictionaryEn.set('potatoes','Baked potatoes are much healthier than fried potatoes.')

dictionary.forEach(function(value, key) {
	console.log(key + " = " + value);
})

dictionaryEn.forEach(function(value, key) {
	console.log(key );
})

function logDico(map){
    console.log("Dictionary log : ");
    for (let [word, definition]of map){
        console.log(word+ " = " + definition);
    }
}
logDico(dictionary);
logDico(dictionaryEn);

function displayDictionaryByLanguageLog(language){
    switch(language){
        case 'FR':
            logDico(dictionary);
            break;
        case 'EN':
            logDico(dictionaryEn);
            break;
        default:
            'language not found'
            break;
    }
}