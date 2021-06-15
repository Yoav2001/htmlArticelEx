
// פתיחה יפה של המאמר עם  פעולה -לא הצלחתי לקשר אליה דרך העמוד HTML

// function slideToggleDiv(){

//     $("#bt_readMore").click(function(){
//         $("#div_article").toggle("slow");
//       });


// }



// פתיחה יפה של האמר אבל לא יעילה 
$(document).ready(function(){
    $("#bt_readMore").click(function(){
        $("#div_article").toggle("slow");

      });

      $("#p1").hover(function(){
        $("#p1").css("color", "blue");
      });
      $("#p2").hover(function(){
        $("#p2").css("color", "blue");
      });
      $("#p3").hover(function(){
        $("#p3").css("color", "blue");
      });
      

  });