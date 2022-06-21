async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        console.log(data.message)
        createdBreedList(data.message)
    } catch (e) {
        console.log(e.message)
    }
}
start()
// // corrigé
function createdBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Sélectionner une race de chien</option>
        ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
        }).join('')}</select>
        `
}

async function doggo() {
    try {
        const response = await fetch("https://dog.ceo/api/breed/hound/images")
        const doggoImg = await response.json()
        console.log(doggoImg.message)
        createdDoggoList(doggoImg.message)
    } catch(e){
        console.log(e)
    }
}
doggo()




// https://dog.ceo/api/breed/hound/images
function createdDoggoList(doggoList){
    document.getElementById("mon-chien").src= `
    ${Object.keys(doggoList).map(function (doggoImg) {
        return `<img src="${doggoImg.message}" />`
    }
         )}
    `
}







// let select = document.createElement(`select`);

// doggo = dograce => {
//     const race = document.querySelector(`#breed`);
//         dograces.forEach(dograce => {
//             const dogRaceElement = document.createElement(`option`);
//             dogRaceElement.innerText = `${dograce.message}`;
//             race.append(dogRaceElement)
//         });
// }