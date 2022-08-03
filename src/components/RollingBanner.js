import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;

const scrollAnim = keyframes`
0%{
    transform: translateX(1920px)
}
100%{
    transform: translateX(-1920px)
}
`;

const re_scrollAnim = keyframes`
0%{
    transform: translateX(-1920px)
}
100%{
    transform: translateX(1920px)
}
`;

const ScrollText = styled.span`
  animation: ${(props) => (props.active === true ? scrollAnim : re_scrollAnim)}
    50s linear infinite;
  transition: 0.5s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  .type_1 {
    ${(prop) => prop.theme.english.headline5}
    letter-spacing: 0.06em;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    color: ${(prop) => prop.theme.colors.bg};
  }
  .type_2 {
    font-family: "YUniverse";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.11em;
    -webkit-text-stroke: 1px ${(prop) => prop.theme.colors.black};
    color: ${(prop) => prop.theme.colors.white};
  }
  .type_3 {
    font-family: "YUniverse";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.11em;
    -webkit-text-stroke: 1px ${(prop) => prop.theme.colors.green300};
    color: ${(prop) => prop.theme.colors.white};
  }
  span {
    font-family: "YUniverse";
  }
`;

export const BannerData = [
  {
    textStyle: 0,
    size: 102,
    style: "2px solid black",
  },
  {
    bg: "black",
    size: 46,
    textStyle: 2,
    style: "none",
  },
  {
    bg: "#00FF85",
    textStyle: 1,
    direction: true,
    size: 73,
    style: "none",
  },
];

export const textData = [
  "THE FUTURE IS CIRCULAR !",
  "세컨드라이프의 지속가능한 의류소비과정 보러가기 !",
  "짃 THE FUTURE IS CIRCULAR 짃 THE FUTURE IS CIRCULAR 짃 THE FUTURE IS CIRCULAR",
  "짃 제주의 푸르른 비자림을 지켜주세요 짃 제주의 푸르른 비자림을 지켜주세요 짃 제주의 푸르른 비자림을 지켜주세요",
];

const RollingBanner = ({ type, children }) => {
  return (
    <Container
      style={{
        backgroundColor: type.bg,
        height: type.size,
        borderTop: type.style,
        borderBottom: type.style,
      }}
    >
      <ScrollText active={type.direction}>
        <h1
          className={
            type.textStyle === 0
              ? "type_1"
              : type.textStyle === 1
              ? "type_2"
              : "type_3"
          }
        >
          {children}
          {children}
          {children}
          {children}
          {children}
        </h1>
      </ScrollText>
    </Container>
  );
};

RollingBanner.defaultProps = {
  type: {
    bg: "transparent",
    size: 102,
    direction: true,
    style: "none",
    textStyle: 0,
  },
};

export default RollingBanner;
