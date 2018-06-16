//arguments object - no longer bound w/ arrow functions
// const add = (a,b) => {
//     // console.log(arguments);
//   return a + b;
// };
// console.log(add(100,5,10));
//Does not work arguements is not defined



// this keyword - no longer bound
// const user = {
//     name: 'Henry',
//     cities: ['NYC', 'Virginia', 'Florida'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city)
//     }
// };
// console.log(user.printPlacesLived());

// printPlacesLived: function () { ---> We changed line above from this line to clean it up!!! AWESOME :)
        // console.log(this.name);
        // console.log(this.cities); *Work around is ( const that = this; )
        // const that = this; no need to do this, change forEach function to arrow function
        // and change that to this below.
        // this.cities.forEach((city) => {
        //  console.log(this.name + ' has lived in ' + city);
        // });

const multiplier = {
    numbers: [1,2,3,4],
    multplyBy(num) {
        return this.numbers.map((num) => num * 2)
    }
}
console.log(multiplier.multplyBy(4))