import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import FinishSignUp from "./components/FinishSignUp";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="/signup/finishSignUp" element={<FinishSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
