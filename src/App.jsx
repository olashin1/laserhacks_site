import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SponsorUs from "./pages/SponsorUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="sponsor-us" element={<SponsorUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
