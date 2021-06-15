function msg(){  
    alert("Hello Javatpoint");  
   } 

function changetxt()

{
    document.getElementById('test_p').innerHTML="change txt WORKS!!";

    document.getElementById('r').innerHTML="change txt WORKS!!";

}
var x=0;

function foo()

{
    x+=1;
    document.getElementById('text').innerHTML=`clicked ${x} times`;
}




function changeColor(){

    var colorChanger =document.getElementById("r")
var r = Math.round(Math.random()*255);
var g = Math.round(Math.random()*255);
var b = Math.round(Math.random()*255);
  colorChanger.style.backgroundColor =  "rgb("+r+","+g+","+b+")";

}



function arrFun()