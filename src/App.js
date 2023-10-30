import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TopBar from "./Components/TopBar";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import Donation from "./Pages/Donation";
import Events from "./Pages/Events";
import Internship from "./Pages/Internship";
import VerifyCertificate from "./Pages/VerifyCertificate";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <NavBar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Internship" element={<Internship />} />
          <Route exact path="/Donation" element={<Donation />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/Verify" element={<VerifyCertificate />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
