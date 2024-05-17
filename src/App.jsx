import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";
import Contacts from "./pages/Contacts";
import "./App.css";
import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router";
import Footer from "./components/nav/Footer";
import SingleRecipe from "./pages/SingleRecipe";
import { useDispatch } from "react-redux";
import { addRecipes } from "./slices/recipesSlice";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((res) => res.json())
      .then((data) => dispatch(addRecipes(data)));
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/recipe" element={<SingleRecipe />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
