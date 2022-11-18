$(document).ready(function() {

    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#buttonStart");
    var $buttonStop = $("#buttonStop");
    var $buttonReset = $("#buttonReset");
    var interval;
    var $timer = $("p");
    var $wrapper = $(".wrapper");

    $buttonStart.addClass("buttonClass");
    $buttonStop.addClass("buttonClass");
    $buttonReset.addClass("buttonClass");

    $wrapper.css({
    "width" : "500px",
    "text-align" : "center",
    "align-content" : "center",
    "background-color" : "darkorange",
    "border" : "5px solid darkslateblue",
    "padding" : "35px",
    "font-family" : "Arial",
    "margin-left" : "50px", 
    "font-size" : "xx-large",
    "border-radius" : "10%",
    "outline-style" : "double"
    })

    $(".buttonClass").css({
        "background-color" : "forestgreen",
        "border-radius" : "25%",
        "text-align" : "center",
        "align-content" : "center",
        "border-color" : "darkgreen"
    });
    
    $timer.addClass("timer-background");
    $(".timer-background").css("background-color", "grey");
    $(".timer-background").css("text-align", "center");
    $(".timer-background").css("align-content", "center");


    var animation = $buttonStart.click(function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $(".timer-background").css("background-color", "green");

        fadeInOut = setInterval(function() {
            $(".timer-background").animate({opacity: .8}, function() {
                $(".timer-background").animate({opacity: 1.0});
            });
        }, 1000);

        
    });
    

    $buttonStop.click(function() {
        clearInterval(interval);
        clearInterval(fadeInOut);
        $(".timer-background").css("background-color", "red");               
    });


    $buttonReset.click(function() {
        clearInterval(interval);
        clearInterval(fadeInOut);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        // clearInterval(fadeInOut);
        $(".timer-background").css("background-color", "grey");
    });

    function startTimer() {
        tens++;
        if (tens < 9) {
            $appendTens.html("0" + tens); 
        }
        if (tens > 9) {
            $appendTens.html(tens); 
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0); 
        }
        if (seconds > 9) {
            $appendSeconds.html(seconds); 
        }
    };

});