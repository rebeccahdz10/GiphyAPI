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

for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button>' + topics[i] + '</button>')
    buttons.appendTo('#buttonCont').addClass("newButton");
}



// $(".newButton").on("click", function () {
//     var plants = $(this).val();

//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         plants + "&api_key=FEGUgBnb0ugsVKKqYGEX8N2f4cm4s81U&limit=15";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             var results = response.data;
//             var newDiv = $("<div>");
//             var rating = results[i].rating;
//             var p = $("<p>").text("Rating: " + rating);
//             var flowImage = $("<img>");

//             flowImage.attr("src", results[i].images.fixed_height.url);

//             newDiv.append(p);
//             newDiv.append(flowImage);

//             $("#giphyCont").prepend(gifDiv);
//         });

// });



//MAIN PROCESS
