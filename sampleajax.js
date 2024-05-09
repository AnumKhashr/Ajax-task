
$(function(){
    $("#load").click(function(){
        $.get("students.txt", function(Response){
            $("#result").empty();
            $("#result").append(Response);
        });
    });
    });





/*$(function(){
    $("#Load").click(sendAjax);
});
function sendAjax(){
    console.log("Sending Ajax Request");
    //send request here
    $.get("students.txt", handleResponse);
    console.log("sent");
}
    function handleReponse(Response){
        console.log("Response Recieved!");
        console.log("Response");
       $("#results").empty();
       $("#results").append(Response);
    }
*/ 

/*$(function(){
    $("#Load").click(sendAjax);
});

function sendAjax(){
    console.log("Sending Ajax Request");
    //send request here
    $.get("students.txt", handleResponse);
    console.log("sent");
}

function handleResponse(response){
    console.log("Response Received!");
    console.log(response);
    $("#results").empty();
    $("#results").append(response);
} */ 

