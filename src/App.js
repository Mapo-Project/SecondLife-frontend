import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import UserInformation from "./components/UserInformation";
import Agreement from "./components/Agreement";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup/agreement" element={<Agreement />} />
          <Route path="/signup/userinform" element={<UserInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
