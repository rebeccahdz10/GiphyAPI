//GLOBAL VARIABLES
var topics = [
    "Rose",
    "Tulip",
    "Sunflower",
    "Poppy",
    "Crysanthemum",
    "Lilly",
    "Carnation",
    "Camellia",
    "Dandelion",
    "Gardenias",
    "Hibiscus",
    "Orchid"
]
var userInput = "";


//FUNCTIONS
function createButtons() {
    for (var i = 0; i < topics.length; i++) {
        document.getElementById("buttonCont").innerHTML += "<button>" + topics[i] + "</button>";
    }
}


//MAIN PROCESS
createButtons();