async function getCoderData() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + document.querySelector("#pokeSelect").value);
    var coderData = await response.json();
    console.log(coderData.sprites.front_shiny);
    console.log(coderData.types[0].type.name)

    document.querySelector("#pokeImg").src = coderData.sprites.front_default
}

getCoderData();