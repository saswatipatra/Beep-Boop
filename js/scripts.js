//Global variable;
  var series=[];

// Bussines logic
var genrateSeries= function(countNum){

  for (var i = 0; i <= countNum; i++) {
    series.push(i);
  }
return series;
}


var printSeries= function(series, countNum){
  for (var i = 0; i <= countNum; i++) {
    var string;
    var store=[];
    string=series[i];
    string=string.toString();
    for (var j=0; j<string.length; j++){
      store.push(+string.charAt(j));
      if(store.includes(3)){
        series.splice(i,1," I'm sorry Dave, I'm afraid I can't do that" );

      }else if (store.includes(2)) {
        series.splice(i,1," Boop! " );

      }else if (store.includes(1)) {
        series.splice(i,1," Beep! " );

      }
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
  // $(".result").hide();
  location.reload();
}





// User Interface Logic

$(document).ready(function() {

  $(".clickable").click(function() {
  $(".image-showing").fadeToggle();
  });

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput= parseInt($("input#countNum").val());
    if (isNaN(userInput)){
      $(".retry").show();
    }else{
    var series1= genrateSeries(userInput);
    var outputSeries= printSeries(series1, userInput);
    $("form").hide();
    $(".series").text(outputSeries);
    $(".result").show();
  }
  });
});
