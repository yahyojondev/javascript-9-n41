

// object 1


// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// // toString() ishlatish
// const toStringOutput = Object.entries(me)
//   .map(([key, value]) => `${key}: ${value}`)
//   .join('\n');

// console.log(toStringOutput);

// // join() ishlatish
// const joinOutput = Object.entries(me)
//   .map(([key, value]) => {
//     if (Array.isArray(value)) {
//       return `${key}: ${value.join('+')}`;
//     }
//     return `${key}: ${value}`;
//   })
//   .join('\n');

// console.log(joinOutput);

// object 2

// const n = 5;

// let res = {};

// for(let i = 1; i <= n; i++){
//     res[i] = i * i;
// }
// console.log(res)

// object 3

// const n = 5;
// let sum = 0;

// let res = {};

// for(let i = 1; i <= n; i++){
//     res[i] = i * i;
//     sum += i + i*i;
// }
// console.log(res,sum)


// object 4

// let arr=  ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// let res = {};

// for(let key of arr){
//     res[key] =  key.length;
// }
// console.log(res)

// object 5

// const products = {
//   "Apelsin": 10000,
//   "Olma": 12000,
//   "Mandarin": 8000,
//   "Banan": 20000
// };

// const totalQuantity = Object.values(products).reduce((sum, price) => sum + price, 0);
// console.log(totalQuantity);


// object 6

// function defineObject(obj) {
//   const keys = Object.keys(obj);
//   return keys.every(key => typeof key === 'number');
// }

// const obj = { abc: 1, 123: 2, d: 5 };
// const result = defineObject(obj);
// console.log(result);

// object 7

// let obj = { a: false, b: 12, c: true, d: 0 }

// let res = {}

// for(let el of obj){
//     if(el == falsy){
//         console.log(delete obj[el]);
//     }
// }

// el 8

// function createCountObject(arr) {
//   const countObject = {};
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (countObject[num]) {
//       countObject[num]++;
//     } else {
//       countObject[num] = 1;
//     }
//   }
//   return countObject;
// }

// const arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const countObject = createCountObject(arr);
// console.log(countObject);

// object 9

// function createNumberObject(number) {
//   const numberString = String(number);
//   const classes = ['birlar', 'minglar', 'millionlar', 'milliardlar', 'trilionlar'];
//   const numberObject = {};

//   for (let i = numberString.length - 1, j = 0; i >= 0; i -= 3, j++) {
//     const slice = numberString.slice(Math.max(i - 2, 0), i + 1);
//     numberObject[classes[j]] = Number(slice);
//   }

//   return numberObject;
// }

// const number = 8945472985629;
// const result = createNumberObject(number);
// console.log(result);

// objet 10


// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ]


// object 11

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let totalSum = 0;

// for (let i = 0; i < products.length; i++) {
//   const product = products[i];
//   const discountedPrice = product.price - (product.price * product.discount / 100);
//   const totalPrice = discountedPrice * product.quantity;
//   totalSum += totalPrice;
// }

// console.log("Total sum:", totalSum);

// object 12

// const obj = {
//   "it": 20,
//   "mushuk": 10,
//   "sigir": 200,
//   "tovuq": 2
// }

// let res = Object.entries(obj);
// console.log(...res);

// object 13

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// let totalGradePoints = 0;
// let totalCredits = 0;

// for (let i = 0; i < grades.length; i++) {
//   const { grade, kredit } = grades[i];
//   totalGradePoints += grade * kredit;
//   totalCredits += kredit;
// }

// const GPA = totalGradePoints / totalCredits;

// console.log("GPA:", GPA);


// object 14

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};
//  let obj = {...rightAnswers,...myAnswers}

//  let res = {};
// for(let [key,value] of Object.entries(obj)){
//     if(value in res){
//        console.log(value)
//     }else{
//         res[key] = [+key]
//     }
// }
// console.log(res);

// object 15

//  let n = 3
// const obj = { a: 2, b: 3, c: 4, d: 6 };
//  let res = {};

// for(let [key,value] of Object.entries(obj)){
//     res[key] = value * 3;
// }
// console.log(res)

// object 16

// const {
//   name,
//   company: { name: companyName, price },
//   company: {
//     founder: { firstName, lastName, birthDate },
//   },
// } = product;

// console.log(name); // "Iphone 14"
// console.log(companyName); // "Apple"
// console.log(price); // "200 mlrd"
// console.log(firstName); // "Steve"
// console.log(lastName); // "Jobs"
// console.log(birthDate); // 1950

// object 17
