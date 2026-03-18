import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NeighborhoodPage from "./components/NeighborhoodPage";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";

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
          <Route path="/sell" element={<h1 className="text-3xl p-6">SELL PAGE ✅</h1>} />
        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;