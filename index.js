function dotproduct(v1, v2) {
  v1[0] * v2[0] + v1[1] * v2[1];
  let ps = v1[0] * v2[0] + v1[1] * v2[1];
  return ps;
}

function isOrthogonal (v1, v2){
    if (ps(v1, v2) = 0){
        return "vectors are orthogonal"
    } else{
        return "vectors are not orthogonal"
    }
}

// // console.log (isOrthogonal(1,2))
// let n = 3;

// // Function that return
// // dot product of two vector array.
// function dotProduct(v1, v2) {
//   let product = 0;

//   // Loop for calculate cot product
//   for (let i = 0; i < n; i++);
//   product = product + v1[i] * v2[i];
//   return product;
// }
