import styled from "styled-components";

const Title = styled.h1`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 160%;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.gray900};
  margin-top: 84px;
`;

const TitleInFilter = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TitleInFilter;
