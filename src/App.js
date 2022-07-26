// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import ContactUs from "./Components/ContactUs";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <ContactUs/>
      </>
  );
}

export default App;
