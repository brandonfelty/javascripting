const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
while (ingredients.length < 8) {
  console.log(ingredients);
}
// Write a for loop that prints out the contents of ingredients:
for (const ingredients of ingredients) {
  console.log(ingredients);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients.reverse);
}