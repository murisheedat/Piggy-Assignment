import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Footer from "./static/Footer";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import Faqs from "./pages/Faqs";
import Resources from "./pages/Resources";
import Safelock from "./pages/Safelock";
import Piggybank from "./pages/Piggybank";
import Target from "./pages/Target";
import FlexDollar from "./pages/FlexDollar";
import HouseMoney from "./pages/HouseMoney";
import FlexNaira from "./pages/FlexNaira";
// import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/blog" element={<Resources />} />
          <Route path="/safelock" element={<Safelock />} />
          <Route path="/piggybank" element={<Piggybank />} />
          <Route path="/targets" element={<Target />} />
          <Route path="/flex-dollar" element={<FlexDollar />} />
          <Route path="/housemoney" element={<HouseMoney />} />
          <Route path="/flexnaira" element={<FlexNaira />} />
          {/* <Route path="/Shop" element={<Shop />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
