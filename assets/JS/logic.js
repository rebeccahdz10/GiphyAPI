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
    buttons.appendTo('#buttonCont').addClass("flowButton");
}



$(".flowButton").on("click", function () {
    var flor = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        flor + "&api_key=FEGUgBnb0ugsVKKqYGEX8N2f4cm4s81U&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.data);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {


                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var newDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var flowImage = $("<img>").addClass("gif");

                    flowImage.attr("src", results[i].images.fixed_height.url);

                    newDiv.append(p);
                    newDiv.append(flowImage);

                    $("#giphyCont").prepend(newDiv);
                }
            }
        });
});

$("#searchButt").on('click', function (event) {
    event.preventDefault();

    userInput = $("#search").val();

    console.log(userInput);

    var newButton = $("<button>").addClass("new");
    $(".new").html(userInput);

    newButton.appendTo('#buttonCont');

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        userInput + "&api_key=FEGUgBnb0ugsVKKqYGEX8N2f4cm4s81U&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data);
    });


});



//MAIN PROCESS
