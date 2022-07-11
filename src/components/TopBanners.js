import styled from "styled-components";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const Header = styled.header`
  /* background-color: lightblue; */
  width: 100%;
  height: 888px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .carousel {
    /* background-color: lightpink; */
    width: 100%;
    padding-bottom: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TopBanners = () => {
  return (
    <Header>
      <Navbar />
      <Carousel />
    </Header>
  );
};

export default TopBanners;
