// Bussines logic
var printSeries= function(countNum){
  var series=[];
  for (var i = 0; i <= countNum; i++) {
  series.push(i);
}
return series;
}

function mainPageButton()
{
  location.reload();
  
}





$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput= parseInt($("input#countNum").val());
    if (userInput != [^0-9]){
      $(".retry").show();
    }
    var series= printSeries(userInput);
    $(".series").text(series);
    $(".result").show();
  });
});
