import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";
import SimpleLogin from "./auth/SimpleLogin";
import AdditionalUserInform from "./pages/AdditionalUserInform";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/add" element={<AdditionalUserInform />} />
          <Route path="/simple" element={<SimpleLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
