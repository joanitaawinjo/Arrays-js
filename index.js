//find the last elements of the following arrays
let arr1 = [3,7,34,90,12];
let arr2 =  [true, "green", "where",12,56];
console.log(arr1.slice(4));
console.log(arr2.slice(4));

//Write a JS program that will join the following array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let text = myPets.join(", ");
console.log(text);

//sort the array
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let nums = arr3.sort().join(",");
console.log(nums);

//removing duplicate
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = [...new Set(arr)];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log(uniqueArr);
console.log(duplicates); 


//If the word is present
let arr5 = ["the", "way", "x", 4];
let newarr5 = arr5.includes("food");
console.log(newarr5);

//sorting
let word = "renniw";
console.log(word.split("").sort().join(""));

//Array of fruits
let fruits = ["Apple", "Mango", "Pineapple", "Guava", "Strawberry", "Tomato", "Orange", "Raspberry", "Banana", "Avocado"];