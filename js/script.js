function runScript() {
  var a = parseInt(document.getElementById('dim1').value);
  var b = parseInt(document.getElementById('dim2').value);
  var c = parseInt(document.getElementById('dim3').value);

  //  First Solution - Nested If Else Statement
  if (a + c > b && b + c > a && a + b > c) { //if it passes the triangle test,nest all relevant checks
    if (a !== b && b === c || b === a && b !== c || c === a && c !== b) { //check if it passes the isosceles test
      alert("The triangle is Isosceles");
    } else if (b !== c && b !== a && a !== c) { //check if it passes the scalene test
      alert(" The triangle is Scalene");
    } else if ((a === b && b === c) && !(a === 0 || b === 0 || c === 0)) { //check if it passes the equilateral test but not due to dimensions being zero
      alert("The triangle is Equilateral");
    } else { //validate any logic loophole
      alert("Dimensions do not give a triangle!");
    }
  } else { //doesn't even pass one triangle test
    alert("Dimensions do not give a triangle!");
  }
  //end of nested if
}

// Also Working [Second Solution] - 'Block' If Else Statement
// if (!(a === 0 || b === 0 || c === 0) && (a === b && b === c)) {//if it's not zeroes and all sides are equal; it's equilateral.
//   alert("The triangle is Equilateral");
// } else if ((a + c > b && b + c > a && a + b > c) && (a !== b && b === c || b === a && b !== c || c === a && c !== b)) {//if it passes the triangle test and two sides are equal; it's isosceles.
//   alert("The triangle is Isosceles");
// } else if ((a + c > b && b + c > a && a + b > c) && (b !== c && b !== a && a !== c)) {//if it passes the triangle test and neither side is similar; it's scalene.
//   alert(" The triangle is Scalene");
// } else {//doesn't pass the triangle test
//   alert("Dimensions do not give a triangle!");
// }
// // end of block if
// }
