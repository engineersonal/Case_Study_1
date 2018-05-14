//Ajax call to load the data from basicInfo.html file
$(document).ready(function(){
    //Array of the text HTML properties
    var arr = ["basicInfoText", "educationText", "experienceText", 
               "persHighlightsText", "contactDetailsText"];
    
    //Loop on the array
    for( i in arr ) {          
        var section = "#" + arr[i];
    //Ajax call using jquery to load the text HTML properties dynamically
        $(section).load('basicInfo.html #'+arr[i]);
    }
});

//Ajax call to load the data from properties JSON file
function populateText(){
    //Instantiate Ajax request
    var req = new XMLHttpRequest();
    //Call open method with necessary parameters
    req.open('GET', 'properties.json', true);
    //Call onload method by callback
    req.onload = function(){
    //Parse JSON string into Array Object
        var proparray = JSON.parse( this. responseText );
    //Loop on the array and set the innerHTML
        for( i in proparray ){
            document.getElementById(proparray[i].id).innerHTML = proparray[i].text;
        }
    }
    //Send the request
    req.send();
}