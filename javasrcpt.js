
    for (i=0;i<2;i++){
        var rowDiv = $("<div>");
        var colDiv = $("<div>");
        var formDiv = $("<form>");
        var buttonDiv = $("<button>");
        var textArea = $("<textarea>");
        var title = $("<h3>");
        var timeAm = 12;
        var timePm = 1;

        $(".container").append(rowDiv);
        $(rowDiv).addClass("card-fluid");
        $(rowDiv).append("<div>");
        $("div").last().addClass("row no-gutters");
        $(".row no-gutters").append("<div>");


        $("div").last().addClass("col-md-2 bg-dark");
        $(".col-md-2 bg-dark").append(title);
        $(title).addClass("time-text time-text text-center");
        $(".row no-gutters").append("<div>");
        $("div").last().addClass("col-md-10");
        $(".col-md-10").append(formDiv);
        $(formDiv).addClass("form-inline");
        $(formDiv).append(textArea);
        $(textArea).addClass("form-control col-lg-10");
        $(textArea).attr("id", "event");
        $(textArea).attr("rows", "4");
        $(formDiv).append(buttonDiv);
        $(buttonDiv).addClass("btn col-md-2 btn-squared-default btn-dark");
        $(buttonDiv).append("<i>");
        $("i").last().addClass("fa fa-lock fa-5x");
        $("i").attr("data-img=","icons");
        $("i").last().append("<br>").text("Locked");
        $("i").last().append("<br>");
    }
    
    $("h2").text("Today is " + moment().format('MM Do YYYY, h:mm a'));
var schedule = [];

$(".container").on("click", ".btn", function(event){
    console.log($(this).attr("id"));

    if ($(this).attr("id") === "clear-btn"){
        // $(".form-inline").reset();
        schedule = [];
    }
    else{
    event.preventDefault();
    var userInput = $(this).prev(".form-control").val();
    schedule.push(userInput);
    console.log(schedule)

    localStorage.setItem("schedule", JSON.stringify(schedule));
    console.log(JSON.parse(localStorage.getItem("schedule")));
    }
});

