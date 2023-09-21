import styles from "./App.module.css";
import Root from "../Root/Root";
import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import Recipes from "../Recipes/Recipes";
import RecipesAsc from "../RecipesAsc/RecipesAsc";
import Recipe from "../Recipe/Recipe";
import Contact from "../Contact/Contact";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>

      <Route path="/recipes/:name" element={<Recipe />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
