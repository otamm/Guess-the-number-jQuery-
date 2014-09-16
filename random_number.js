$(document).ready(function() {   //the 'ready' function will make jQuery ready when the page loads.
  var randInt = Math.floor(Math.random() * 10);
  $("#restart").hide();
  $("#random").on("submit",function(event){
    event.preventDefault();
    var $integer = parseInt($("#integer").val());
    if ($integer === randInt){
      alert("U WON DIS IS SO COOL");
      $("#restart").show();

    }else if (randInt > $integer){
        alert("HIGHER HIGHER");
      }
      else if (randInt < $integer){
        alert("LOWER LOWER LOWER");
      }
      else{
        alert("NOWP TRY AGAIN");
      }
  });

  $("#restart").on("click",function(event){
    alert("Restarting!");
  });
});


