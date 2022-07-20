import { Link } from "react-router-dom";
import styled from "styled-components";
import Logout from "../pages/Logout";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 99;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  background-color: white;
`;

const Logout2 = () => {
  return (
    <Wrapper>
      <Link to="/logout" element={<Logout />}>
        로그아웃
      </Link>
    </Wrapper>
  );
};

export default Logout2;
