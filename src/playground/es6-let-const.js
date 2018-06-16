// old way es5 :(

var nameVar = 'Henry'
// var nameVar = 'Mike' can do but you run into bugs
console.log('My name is: ', nameVar)
// New way :)
let nameLet = 'jen';
// let nameLet = 'jenny'; can't redefine a variable (error will show) can reasign a variable
nameLet = 'Jenny'; // just like so
// let nameLet = Andy; //invald
console.log('nameLet: ', nameLet)
// New way :)
const nameConst = 'Hank'
console.log(nameConst)

function getPetName() {
  var petName = 'Rusty';
  return petName;
}

const petName = getPetName();

console.log(petName);

// Block level scoping
const fullName = 'Henry Acosta';
let firstName;
 if (fullName) {
    //  var firstName = fullName.split(' ')[0];
     firstName = fullName.split(' ')[0];
     console.log(firstName);
 }
console.log(firstName);
