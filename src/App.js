import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Circle from "./components/Circle";
import Footer from "./components/Footer";
import BottomBanners from "./components/BottomBanner";
import BrandSection from "./components/BrandSection";
import NewItemSection from "./components/NewItemSection";
import TopSellerSection from "./components/TopSellerSection";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Circle" element={<Circle />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/BottomBanners" element={<BottomBanners />} />
          <Route path="/BrandSection" element={<BrandSection />} />
          <Route path="/NewItemSection" element={<NewItemSection />} />
          <Route path="/TopSellerSection" element={<TopSellerSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
