import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import FinishSignUp from "./components/FinishSignUp";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SimpleLogin from "./auth/SimpleLogin";
import { useSelector } from "react-redux";
import SimpleSignUp from "./pages/SimpleSignUp";
import MypageHome from "./components/MypageHome";
import ProductCollection from "./pages/ProductCollection";
import Top from "./components/Top";
import Tshirts from "./components/Tshirts";
import MTM from "./components/MTM";
import Detail from "./components/Detail";

function App() {
  //로그인 체크
  const { login } = useSelector((state) => state.user);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/collection/*" element={<ProductCollection />} />
          <Route path="/top" element={<Top />} />
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/mtm" element={<MTM />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/signup/*"
            element={login ? <Navigate replace to="/" /> : <SignUp />}
          />
          <Route path="/signup/finishSignUp" element={<FinishSignUp />} />
          <Route path="/simple" element={<SimpleLogin />} />
          <Route path="/simple/signup" element={<SimpleSignUp />} />
          <Route
            path="/login"
            element={login ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/simple"
            element={login ? <Navigate replace to="/" /> : <SimpleLogin />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MypageHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
