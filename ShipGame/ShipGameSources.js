var demageArr1 = 0,
demageArr2 = 0,
demageArr3 = 0;
var arr = ["A2","A3","A4","A5","A6","A7","A8","A9","A10",
"B2","B3","B4","B5","B6","B7","B8","B9","B10",
"C2","C3","C4","C5","C6","C7","C8","C9","C10",
"D2","D3","D4","D5","D6","D7","D8","D9",
"E1","E2","E3","E4","E5","E6","E7","E8","E9",
"F1","F2","F3","F4","F6","F7","F8","F9",
"G1","G2","G3","G4","G6","G7","G8","G9",
"H1","H2","H3","H4","H6","H7","H8","H9","H10",
"I1","I2","I3","I4","I6","I7","I8","I9","I10",
"J1","J2","J3","J4","J6","J7","J8","J9","J10"];
var arr1 = ["F5", "G5", "H5", "I5","J5"];
var arr2 = ["A1", "B1", "C1", "D1"];
var arr3 = ["D10", "E10", "F10", "G10"];
var shots = 0;
$("input").change(Ship);
$("button").click(Ship);
function Ship(){
shots++;
var n = document.querySelector("input").value;
for (var i = 0; i< arr1.length; i++ ){
if(arr1[i]== n){
$("." + arr1[i]).attr("style","color:red");
$("." + arr1[i]).text("X");
document.querySelector("input").value ="";
$(".mesage").text("*** Hit ***");
delete arr1[i];
demageArr1 ++;
if (demageArr1 == 5){
document.querySelector(".mesage").innerText = "*** Sunk ***";
}
}}
for (var t = 0; t< arr2.length; t++ ){
if(arr2[t]== n){
$("." + arr2[t]).attr("style","color:red");
$("." + arr2[t]).text("X");
document.querySelector("input").value ="";
$(".mesage").text("*** Hit ***");  
delete arr2[t];
demageArr2 ++;
if (demageArr2 == 4){
document.querySelector(".mesage").innerText = "*** Sunk ***";
}
}}
for (var p = 0; p< arr3.length; p++ ){
if(arr3[p]== n){
$("." + arr3[p]).attr("style","color:red");    
$("." + arr3[p]).text("X");
document.querySelector("input").value ="";
$(".mesage").text("*** Hit ***");
delete arr3[p];  
demageArr3 ++;
if (demageArr3 == 4){
document.querySelector(".mesage").innerText = "*** Sunk ***";
}
}}
for (var o = 0; o< arr.length; o++ ){
if(arr[o]== n){
$("." + arr[o]).attr("style","color:blue");
$("." + arr[o]).text("-");
document.querySelector("input").value ="";
$(".mesage").text("*** Miss ***");

}}
if (arr[o]!=n && arr1[i]!=n && arr2[t]!=n && arr3[p]!=n){
document.querySelector("input").value ="";
//document.querySelector(".mesage").innerText = "*** Error ***";   
}
if(demageArr1 == 5 && demageArr2 == 4 && demageArr3 == 4){
     document.querySelector(".GameShip").style.display = "none";
     document.querySelector(".GameOver").style.display = "";
     document.querySelector(".completed").innerText = "You completed the game in" +" "+ shots + " " + "shots!";



}
}