import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import SignUp from "./pages/SignUp";
import AgreeBtn from "./components/AgreeBtn";
import Test from "./components/Test";
import UserInformation from "./components/UserInformation";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/agree" element={<AgreeBtn />} />
          <Route path="/test" element={<Test />} />
          <Route path="/inform" element={<UserInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
