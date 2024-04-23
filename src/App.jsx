import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";
import Contacts from "./pages/Contacts";
import "./App.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router";
import Footer from "./components/nav/Footer";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
