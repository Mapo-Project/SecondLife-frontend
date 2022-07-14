import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  button:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
  h6 {
    ${({ theme }) => theme.korean.headline6};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

const MoreButton = styled.button`
  ${({ theme }) => theme.korean.subtitle2};
  color: ${({ theme }) => theme.colors.gray900};
  width: 89px;
  height: 36px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 9px;
  }
  cursor: pointer;
  span {
    margin-right: 8px;
  }
`;

const TitleInHome = ({ title }) => {
  return (
    <TopWrapper>
      <h6>{title}</h6>
      <Link to="/">
        <MoreButton>
          <span>더보기</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </MoreButton>
      </Link>
    </TopWrapper>
  );
};

export default TitleInHome;
