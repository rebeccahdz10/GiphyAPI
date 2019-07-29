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
    var flor = $(this).text;

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        flor + "&api_key=FEGUgBnb0ugsVKKqYGEX8N2f4cm4s81U&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response.data);

        // var results = response.data;
        var newDiv = $("<div>");
        var flowImage = $("<img>");

        flowImage.attr("src", response.images.downsized);

        // newDiv.append(p);
        newDiv.append(flowImage);

        $("#giphyCont").prepend(newDiv);
    })

    // .then(function (response) {
    //     var results = response.data;
    //     var newDiv = $("<div>");
    //     var flowImage = $("<img>");

    //     flowImage.attr("src", results[i].images.fixed_height.url);

    //     // newDiv.append(p);
    //     newDiv.append(flowImage);

    //     $("#giphyCont").prepend(newDiv);
    // });

});



//MAIN PROCESS
