import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import UserInformation from "./components/UserInformation";
import Agreement from "./components/Agreement";
import Test from "./components/Test";
import FinishSignUp from "./components/FinishSignUp";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/signup/" element={<SignUp />} /> */}
          <Route path="/signup/*" element={<SignUp />} />
          {/* <Route path="/signup/agreement" element={<Agreement />} /> */}
          {/* <Route path="/signup/userinform" element={<UserInformation />} /> */}
          {/* <Route path="/signup/finishSignUp" element={<FinishSignUp />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
