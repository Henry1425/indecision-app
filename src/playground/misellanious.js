// function displayPTag() {
// 	if (app.options.length > 0) {
// 		return <p>Here are your options:{app.options}</p>
// 	} else {
// 		return <p>No options:(</p>
// 	}

// }

// // JSX - JavaScript XML
// // var template = (
// //     <div>
// //         <h1>Indecision App</h1>
// //           <p>This is some info</p>
// //         <ol>
// //             <li>First</li>
// //             <li>Second</li>
// //             <li>Third</li>
// //         </ol>
// //     </div>
// // );
// const user = {
//     name: 'Henry J Acosta',
//     age: 52,
//     location: 'N.Y.C'
// };

// function getLocation(location) {
//   if (location) {
// 	 return <p>Location: {location}</p> ;
//   }
// }
// else statement doesn't need to be added because it's implicitly returned, if you don't explicitly return it!!!
// undefined if your expression resolves to undefined nothing shows up in jsx

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );