$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "https://myapi.profstream.com/api/1fb831/wines",
        success: function(wine) { 
            console.log(wine);

            //create console log for each user saying "The (year) (winename) from (region), (country) is (description), priced at (price)."

            console.log("The " + wine[0].year + " " + wine[0].name + " from " + wine[0].region + ", " + wine[0].country + " is described as follows: " + wine[0].description  + " Priced at " + wine[0].price + " dollars.");
            console.log("The " + wine[1].year + " " + wine[1].name + " from " + wine[1].region + ", " + wine[1].country + " is described as follows: " + wine[1].description  + " Priced at " + wine[1].price + " dollars.");
            console.log("The " + wine[2].year + " " + wine[2].name + " from " + wine[2].region + ", " + wine[2].country + " is described as follows: " + wine[2].description  + " Priced at " + wine[2].price + " dollars.");
            console.log("The " + wine[3].year + " " + wine[3].name + " from " + wine[3].region + ", " + wine[3].country + " is described as follows: " + wine[3].description  + " Priced at " + wine[3].price + " dollars.");
            console.log("The " + wine[4].year + " " + wine[4].name + " from " + wine[4].region + ", " + wine[4].country + " is described as follows: " + wine[4].description  + " Priced at " + wine[4].price + " dollars.");
            console.log("The " + wine[5].year + " " + wine[5].name + " from " + wine[5].region + ", " + wine[5].country + " is described as follows: " + wine[5].description  + " Priced at " + wine[5].price + " dollars.");
            console.log("The " + wine[6].year + " " + wine[6].name + " from " + wine[6].region + ", " + wine[6].country + " is described as follows: " + wine[6].description  + " Priced at " + wine[6].price + " dollars.");
            console.log("The " + wine[7].year + " " + wine[7].name + " from " + wine[7].region + ", " + wine[7].country + " is described as follows: " + wine[7].description  + " Priced at " + wine[7].price + " dollars.");


        },
        error: function() {
            alert("Error getting data");
        }
    })


});