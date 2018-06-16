// const square = function (x) {
//   return x * x;
// };
// Or
// function square (x) {
//     return x * x;
//   };

// console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// }

// console.log(squareArrow(9));
// // All Arrow functions are anonymous

// const squareArrow3 = (x) => x * x;

// console.log(squareArrow3(10));
const fullName = 'Hank Acosta';
let firstName;
// const getFirstName = (firstName) => {
//     firstName = fullName.split(' ')[0];
//     return firstName;
// };
// Or
const getFirstName = (firstName) => fullName.split(' ')[0];

console.log(getFirstName());

