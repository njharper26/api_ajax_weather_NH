$(document).ready(function(){

    console.log("JQuery is active");

    $('form').submit(function( event ){
        var api_key = "&APPID=11abc7b2f268b2e87d86d2f2efc9bdf4";
        var html_str = "http://api.openweathermap.org/data/2.5/weather?q=";
        var city = $( "#city" ).val();
        console.log( city );
        $.get( html_str + city + api_key, function(data){
            console.log(data);
            var K = data.main.temp;
            var F = Math.round( 1.8 * (K - 273) + 32 );
            var html_str = "";
            html_str += "<h2>City: ";
            html_str += city;
            html_str += "</h2> </br> <h4>Temperature: ";
            html_str += F;
            html_str += " degrees F</h4>"
            $(".result").html(html_str);
        }, "json");
        return false;
    })
});

// F = 1.8 * (K - 273) + 32