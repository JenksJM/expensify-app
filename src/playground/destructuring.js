// const person = {
//     name: 'Jamie',
//     age: 26,
//     location: {
//         city: 'Neath',
//         temp: 12
//     }
// };

// const { name: firstname = 'Annoyous', age } = person;
// console.log(`${firstname} is ${age}.`);


// const {temp: temperature, city} = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemType, , mediumPrice] = item;
console.log(`A medium ${itemType} costs ${mediumPrice}.`);