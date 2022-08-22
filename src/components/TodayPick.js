import { Link } from "react-router-dom";
import styled from "styled-components";

const TodayPickWrapper = styled.div`
  margin-top: 135px;
  width: 100%;
  height: 349px;
  background-color: #fb2dff;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TodayPick = () => {
  return (
    <Link to="/">
      <TodayPickWrapper
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/todaypickImg/Todaypick.jpg)`,
        }}
      />
    </Link>
  );
};

export default TodayPick;
