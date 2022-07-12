import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import FollowingPDSection from "./components/FollowingPDSection";
import PopularSection from "./components/PopularSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<FollowingPDSection />} />
          <Route path="/popular" element={<PopularSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
