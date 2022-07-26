import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import ContactUs from "./Components/ContactUs";


function App() {
  return (

<Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/aboutme' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
