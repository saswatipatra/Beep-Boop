// Bussines logic
var printSeries= function(countNum){
  var series=[];
  for (var i = 0; i <= countNum; i++) {
    if (i===1){
      series.push(" Beep! ");
    }else if (i===2) {
      series.push(" Boop! ");
    }else if (i===3) {
      series.push(" I'm sorry dave, I'm afraid i can't do that. ");
    }else {
      series.push(i);
    }

}
return series;
}

function mainPageButton()
{
  location.reload();

}

function retryButton()
{
  $(".result").hide();
  location.reload();

}




$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput= parseInt($("input#countNum").val());
    if (isNaN(userInput)){
      $(".retry").show();
    }else{
    var series= printSeries(userInput);
    $(".series").text(series);
    $(".result").show();
  }
  });
});
