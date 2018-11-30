
function runScript() {
var dim1=document.getElementById('dim1').value;
// alert("the first element is" + dim1);
var dim2=document.getElementById('dim2').value;
var dim3=document.getElementById('dim3').value;
//
// var sideA= parseInt(dim1);
// var sideB= parseInt(dim2);
// var sideC= parseInt(dim3);
// alert("the first element is" + dim1);
// alert("the second element is" + dim2);
// alert("the third element is" + dim3);

if (dim1 === dim2 && dim2 === dim3) {
  alert("The triangle is Equilateral");
}

else if (dim1 !== dim2 && dim2 === dim3){

//         if (dim1 === dim3){
        alert("The triangle is Isosceles");
//         }
//         else {
//         alert("The triangle is Scalene");
//         }
//    //
   // if (dim1===dim3 && dim1!===dim2) {
   //   alert("The triangle is Isosceles");
        }
// }
// }
//
else if (dim1!== dim2 && dim1!== dim3 && dim2 !== dim3)
   {
  alert(" The triangle is Scalene");
}
// //
// else if (dim1===0||dim1===NaN || dim2===0||dim2===NaN ||dim3===0||dim3===NaN){
//   alert(" Not a Triangle");
// }
else {
  alert("Lol");
}

//

// if (sideA === sideB && sideA === sideC && sideB === sideC) {
//   alert("The triangle is Equilateral");
// }
//
// else if ((sideA !== sideB && sideB === sideC) || (sideB === sideA && sideA !== sideA) || (sideA===sideC) && (sideA!===sideB){
//   alert("The triangle is Isosceles");
// }
//
// else if (sideA!== sideB && sideA!== sideC && sideB !== sideC) {
//   alert(" The triangle is Scalene");
// }
//
// else if (sideA===0||sideA===NaN || sideB===0||sideB===NaN ||sideC===0||sideC===NaN){
//   alert(" Not a Triangle");
// }
// else {
//   alert("Please enter some shit!! Stupid Shit");
// }
}
