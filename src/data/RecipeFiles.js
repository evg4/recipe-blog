const recipesArray = [
  {
    id: 1,
    name: "Chocolate Cake",
    recipe: "Mix ingredients together and cook in the oven.",
    date: "Jan 2022",
  },
  {
    id: 2,
    name: "Lasagna",
    recipe: "The more layers the better! And don't forget the cheese!",
    date: "Feb 2022",
  },
  {
    id: 3,
    name: "Salad",
    recipe:
      "Perfect for when you don't want to cook anything. Just throw together the ingredients and it's ready!",
    date: "March 2022",
  },
  {
    id: 4,
    name: "Paella",
    recipe:
      "A Spanish classic with lots of variations. Be patient and it will be worth it!",
    date: "April 2022",
  },
  {
    id: 5,
    name: "Pizza",
    recipe:
      "Make the dough by hand - it's worth the extra effort. Add toppings, cook, and you're done!",
    date: "May 2022",
  },
  {
    id: 6,
    name: "Banoffee",
    recipe: "John's favourite. Do it justice.",
    date: "June 2022",
  },
];

const recipeNames = [];
for (const recipe of recipesArray) {
  recipeNames.push(recipe.name);
}

export { recipesArray, recipeNames };
