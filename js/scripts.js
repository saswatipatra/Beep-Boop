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
    for (var j=0; j<=string; j++){
      store=store.push(string.charAT(j));
      if(store.includes('3')){
        series[i].splice(i,1," I'm sorry Dave, I'm afraid I can't do that" );
        return;
      }else if (store.includes('2')) {
        series[i].splice(i,1," Boop! " );
        return;
      }else if (stor.includes('1')) {
        series[i].splice(i,1," Beep! " );
        return;
      }
    }
  }
  return series;
}



//     if (series[i]===3 || series[i]===3 || series[i]===3){
//       series.splice(i, 1, " I'm sorry Dave, I'm afraid I can't do that ");
//     }else if ((series[0]===2 || series[1]===2 || series[2]===2) && (series[0]!= 3 || series[1]!= 3 || series[2]!= 3)) {
//       series.splice(i, 1, " Boop! ");
//     }else if ((series[0]===1 || series[1]===1 || series[2]===1) && (series[0]!= 2 || series[1]!= 2 || series[2]!= 2) && (series[0]!= 3 || series[1]!= 3 || series[2]!= 3) ) {
//       series.splice(i, 1, " Beep! ");
//     }
//   }
//  return series;
// }

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
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput= parseInt($("input#countNum").val());
    debugger;
    if (isNaN(userInput)){
      $(".retry").show();
    }else{
    var series1= genrateSeries(userInput);
    var outputSeries= printSeries(series1, userInput);
    $(".series").text(outputSeries);
    $(".result").show();
  }
  });
});
