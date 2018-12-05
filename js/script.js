function runScript() {
  var dim1 = document.getElementById('dim1').value;
  var dim2 = document.getElementById('dim2').value;
  var dim3 = document.getElementById('dim3').value;

  if (dim2 === 0||dim1 === ||dim3 ===0 || parseInt(dim1)===NaN || parseInt(dim2)===NaN || parseInt(dim3)===NaN) {
    alert("Dimensions do not give a triangle!");
  }
  else if (dim2===dim3 && dim2!==dim1 && dim3!===dim1) {
    alert("Dimensions do not give a triangle!");
  }
  else {
    if (dim1 === dim2 && dim2 === dim3) {
      alert("The triangle is Equilateral");
    } else if (dim1 !== dim2 && dim2 === dim3 || dim2 === dim1 && dim2 !== dim3 || dim3 === dim1 && dim3 !== dim2) {
      alert("The triangle is Isosceles");
    } else if (dim2 !== dim3 && dim2 !== dim1 && dim1 !== dim3) {
      alert(" The triangle is Scalene");
    } else {
      alert("Dimensions do not give a triangle!");
    }
  }
}
