// EXAMPLE 1 - Remove the last N Characters from a String in JavaScript

const str = 'bobbyhadz.com';

// ✅ Remove the last 2 characters from a string
const removeLast2 = str.slice(0, -2);
console.log(removeLast2); // 👉️ bobbyhadz.c

// ✅ Remove the last 3 characters from a string
const removeLast3 = str.slice(0, -3);
console.log(removeLast3); // 👉️ bobbyhadz.

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove the last N Characters from a String using String.substring()

// const str = 'bobbyhadz.com';

// // ✅ Remove the last 2 characters from a string
// const removeLast2 = str.substring(0, str.length - 2);
// console.log(removeLast2); // 👉️ bobbyhadz.c

// // ✅ Remove the last 3 characters from a string
// const removeLast3 = str.substring(0, str.length - 3);
// console.log(removeLast3); // 👉️ bobbyhadz.

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove the last N characters from a string conditionally

// const str = 'bobbyhadz.com';

// // ✅ remove the last 2 characters from a string conditionally
// const removeLast2 = str.replace(/om$/, '');
// console.log(removeLast2); // 👉️ bobbyhadz.c

// // ✅ remove the last 3 characters from a string conditionally
// const removeLast3 = str.replace(/com$/, '');
// console.log(removeLast3); // 👉️ bobbyhadz.
