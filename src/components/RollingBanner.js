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
  .type_1 {
    ${(prop) => prop.theme.english.headline5}
    letter-spacing: 0.06em;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    color: ${(prop) => prop.theme.colors.bg};
  }
  .type_2 {
    font-family: "Y Universe";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.11em;
    -webkit-text-stroke: 1px ${(prop) => prop.theme.colors.black};
    color: ${(prop) => prop.theme.colors.white};
  }
  .type_3 {
    font-family: "Y Universe";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.11em;
    -webkit-text-stroke: 1px ${(prop) => prop.theme.colors.green300};
    color: ${(prop) => prop.theme.colors.white};
  }
`;

const RollingBanner = ({ type, children }) => {
  return (
    <Container
      style={{
        backgroundColor: type.bg,
        height: type.size,
        border: type.style,
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
