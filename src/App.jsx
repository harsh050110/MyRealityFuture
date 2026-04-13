import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NeighborhoodPage from "./components/NeighborhoodPage";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import NewDevelopmentsUI from "./pages/New";
import GPT from "./pages/GPT";
import SkylinePage from "./pages/properties/Skyline";
import DowntownPage from "./pages/properties/DowntownPage";
import OceanPage from "./pages/properties/OceanPage";
import ContactUs from "./pages/contactus";

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-24 min-h-screen bg-gray-100">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neighborhoods" element={<NeighborhoodPage />} />
{
          <Route path="/buy" element={<Buy />} /> }
          {
          <Route path="/rent" element={<Rent />} />}
          <Route path="/sell" element={< Sell />}/>
          <Route path="/new" element={<NewDevelopmentsUI/>}/>
          <Route path="/gpt" element={<GPT/>}/>
          <Route path="/property/skyline" element={<SkylinePage />}/>
          <Route path="/property/downtown" element={<DowntownPage/>}/>
          <Route path ="/property/ocean" element={<OceanPage/>}/>
          <Route path ="/contactus" element ={<ContactUs/>}/>
        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;