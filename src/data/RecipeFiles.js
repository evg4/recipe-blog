import chocCake from "../assets/choc-cake.jpg";
import lasagna from "../assets/lasagna.jpg";
import greekSalad from "../assets/greek-salad.jpg";
import paella from "../assets/paella.jpg";
import pizza from "../assets/pizza.jpg";
import banoffee from "../assets/banoffee.jpg";

const recipesArray = [
  {
    id: 0,
    name: "Chocolate Cake",
    ingredients: [
      "200g golden caster sugar",
      "200g unsalted butter",
      "4 eggs",
      "200g self-raising flour",
      "2tbsp cocoa powder",
      "1tsp baking powder",
      "0.5tsp vanilla extract",
      "2tbsp milk",
      "buttercream",
    ],
    recipe: [
      "Preheat oven to 190°C and grease and line two 20cm sandwich tins.",
      "In a large bowl, beat together 200g golden caster sugar, 200g softened unsalted butter, 4 large eggs, 200g self-raising flour, 2 tbsp cocoa powder, 1 tsp baking powder, ½ tsp vanilla extract, 2 tbsp milk and a pinch of salt until pale.",
      "Divide the mixture between the prepared tins. Bake for 20 mins or until a skewer inserted into the centre of the cake comes out clean.",
      "Allow to cool completely. Sandwich the two cakes together with half of the buttercream and put the rest on top.",
    ],
    date: "Jan 2022",
    img: chocCake,
  },
  {
    id: 1,
    name: "Lasagna",
    ingredients: [
      "Olive oil",
      "2 rashers bacon",
      "1 onion",
      "1 celery stick, finely chopped",
      "1 carrot, grated",
      "2 garlic cloves, finely chopped",
      "500g beef mince",
      "1tbsp tomato puree",
      "2x400g tin chopped tomatoes",
      "500g lasagna sheests",
      "400ml bechemel sauce",
      "125g mozzarella",
      "50g grated parmesan",
      "handful basil leaves",
    ],
    recipe: [
      "Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.",
      "Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.",
      "Stir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Season to taste. Simmer for 20 mins.",
      "Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.",
      "Pour the bechemel over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.",
    ],
    date: "Feb 2022",
    img: lasagna,
  },
  {
    id: 2,
    name: "Greek salad",
    ingredients: [
      "4 large tomatoes",
      "1 cucumber",
      "1 red onion",
      "16 olives",
      "1tsp dried oregano",
      "85g feta cheese",
      "4tbsp olive oil",
    ],
    recipe: [
      "Place 4 large vine tomatoes, cut into wedges, 1 peeled, deseeded and chopped cucumber, ½ a thinly sliced red onion, 16 Kalamata olives, 1 tsp dried oregano, 85g feta cheese chunks and 4 tbsp Greek extra virgin olive oil in a large bowl.",
      "Lightly season, then serve with crusty bread to mop up all of the juices.",
    ],
    date: "March 2022",
    img: greekSalad,
  },
  {
    id: 3,
    name: "Paella",
    ingredients: [
      "400g tin chopped tomatoes",
      "600ml chicken stock",
      "1tsp smoked paprika",
      "2 pinches saffron",
      "1 onion",
      "3 garlic cloves",
      "4tbsp olive oil",
      "300g paella rice",
      "4 skinless, boneless chicken thighs",
      "200g chorizo",
      "85g frozen peas",
      "150g raw king prawns",
      "250g mussels, cleaned",
      "1 lemon",
    ],
    recipe: [
      "Heat the oven to 220C/200C fan/gas 7. Combine the tomatoes, stock, paprika and saffron in a large heatproof jug, then microwave for 5 mins on high, or until steaming hot. Or, heat in a pan on the hob.",
      "Put the onion and garlic in a large ovenproof frying pan or roasting tin, drizzle over the olive oil and stir to coat. Roast for 20 mins, or until the veg is starting to brown.",
      "Stir in the rice, chicken, chorizo and hot stock mix. Season and bake for 20 mins (don’t cover the pan).",
      "Gently stir in the peas, dot over the prawns and press the mussels in, hinged-side down, so they’re standing up. Arrange the lemon wedges around the edge, if using. Bake for 5-10 mins more until the rice, chicken and prawns are cooked, and the mussels have opened (discard any that stay shut). Check for seasoning, and serve.",
    ],
    date: "April 2022",
    img: paella,
  },
  {
    id: 4,
    name: "Pizza",
    ingredients: [
      "300g strong bread flour",
      "1tsp instant yeast",
      "1tsp salt",
      "1tbsp olive oil",
      "100ml passata",
      "handful fresh basil",
      "1 garlic clove, crushed",
      "125g mozzarella",
      "grated parmesan",
      "handful cherry tomatoes",
    ],
    recipe: [
      "Make the base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it’s not essential for a thin crust.",
      "Make the sauce: Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.",
      "Roll out the dough: if you’ve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large rounds, about 25cm across, using a rolling pin. The dough needs to be very thin as it will rise in the oven. Lift the rounds onto two floured baking sheets.",
      "Top and bake: heat the oven to 240C/220C fan/gas 8. Put another baking sheet or an upturned baking tray in the oven on the top shelf. Smooth sauce over bases with the back of a spoon. Scatter with cheese and tomatoes, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using. Repeat step for remaining pizza.",
    ],
    date: "May 2022",
    img: pizza,
  },
  {
    id: 5,
    name: "Banoffee pie",
    ingredients: [
      "225g digestive biscuits",
      "150g melted butter",
      "397g can caramel",
      "3 small bananas, sliced",
      "300ml double cream",
      "1tbsp icing sugar",
      "1 square dark chooclate",
    ],
    recipe: [
      "Crush the digestive biscuits, either by hand using a wooden spoon, or in a food processor, until you get fine crumbs, tip into a bowl. Mix the crushed biscuits with the melted butter until fully combined. Tip the mixture into a 23cm loose bottomed fluted tart tin and cover the tin, including the sides, with the biscuit in an even layer. Push down with the back of a spoon to smooth the surface and chill for 1 hr, or overnight.",
      "Beat the caramel to loosen and spoon it over the bottom of the biscuit base. Spread it out evenly using the back of a spoon or palette knife. Gently push the chopped banana into the top of the caramel until the base is covered. Put in the fridge.",
      "Whip the cream with the icing sugar until billowy and thick. Take the pie out of the fridge and spoon the whipped cream on top of the bananas. Grate the dark chocolate over the cream, if you like, and serve.",
    ],
    date: "June 2022",
    img: banoffee,
  },
];

const recipeNames = [];
for (const recipe of recipesArray) {
  recipeNames.push(recipe.name);
}

export { recipesArray, recipeNames };
