import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./assets/navbar";
import HeroSection from "./assets/Herosection";
import Services from "./assets/Detailsection";
import VideoSection from "./assets/VideoSection";
import FooterSection from "./assets/FooterSection";
import ServicesPage from "./assets/ServicesPage"; // We will create this next
import PartsPage from "./assets/PartsPage";
import FeaturedParts from "./assets/FeaturedParts";
 import ContactPage from "./assets/ContactPage";
 import RentalRates from "./assets/RentalRates";
import "./App.css";

// This represents your current landing page
const Home = () => (
  <>
    <HeroSection />
    <Services />
    <FeaturedParts />
    <VideoSection />
  </>
);

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* Dedicated Services Page */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rental-rates" element={<RentalRates />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
