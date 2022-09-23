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
  overflow-x: hidden;

  .carousel {
    /* background-color: lightpink; */
    position: relative;
    width: 100%;
    height: 798px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
