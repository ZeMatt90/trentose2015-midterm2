/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 
/*
function reset(){
  $(".done").addClass("hidden")
 $(".done").removeClass("done")
 $(".done").addClass("hidden")
 $(".done").removeClass("done")
}*/
var tot= 0;
var yes= 0;
var no= 0;
function fertig(){
    var final = "<h3> You remembered <span id='tot-good'>YES</span> "+"of <span id='tot'>TOT</span></h3>";
    
            final = final.replace("YES", yes);
            final = final.replace("TOT", tot);
            $(".final").append(final);
}

function correct(){
    yes++;
    tot++;
    if(tot ==7)
    {
        fertig();
    }
}
function incorrect(){
    no++;
    tot++;
    if(tot ==7)
    {
        fertig();
    }
}

var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution">SOLUTION</h3>'+
           ' </li> ';

$(document).ready(function(){

    $(".final").addClass("hidden")
    //$(".done").removeClass("done")
    
    for( var i=0; i < data.length; i++) {
        var infos = tmpl;
            infos = infos.replace("ID", i);
            infos = infos.replace("WORD", data[i]);
            infos = infos.replace("SOLUTION", data[i]);
            $(".cards").append(infos);
    }
    

});


$(".opt-correct").click(correct());
$(".opt-incorrect").click(incorrect());




