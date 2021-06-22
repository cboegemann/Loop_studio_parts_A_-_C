//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (i = 0; i < 6; i++) {
    console.log(`Meal ${i + 1} will include: `)
    console.log(protein[i], grain[i], vegetable[i], beverage[i], dessert[i]);
    console.log(`\n`);
}

//for (i = )

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

const input = require('readline-sync');
let quantity = Number(input.question('How many meals would you like? '));

while(quantity < 0 || quantity > 6) {
    console.log("Please input a number between 1 - 6");
    quantity = Number(input.question("How many meals would you like? "));
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”

//a 

let number = Math.floor(Math.random() * 6)

console.log(`We have many great items on today's menu! Our house special today will be ${protein[number]}, ${grain[number]}, and ${vegetable[number]}, accompanied by ${beverage[number]} to drink and ${dessert[number]} for dessert.`)


//b
let meals = [];
meals.push(protein);
meals.push(grain);
meals.push(vegetable);
meals.push(beverage);
meals.push(dessert);
console.log(meals);

//c

let whichMeal = Number(input.question('Which meal would you like? '));

while(whichMeal < 0 || whichMeal > 5) {
    console.log("Please input a number between 1 - 5");
    whichMeal = Number(input.question("Which meal would you like? "));
}

mealSelection = meals[whichMeal - 1];

console.log(`You have selected meal ${whichMeal}. This selection includes ${mealSelection}. `)

if (mealSelection.includes("kale")) {
    console.log("Don't worry, you can have double chocolate tomorrow.");
}