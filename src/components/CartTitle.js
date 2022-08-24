import styled from "styled-components";

const TopWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-bottom: 1px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    ${({ theme }) => theme.korean.headline4}
  }
`;

const CartTitle = ({ title }) => {
  return (
    <TopWrapper>
      <h1>{title}</h1>
    </TopWrapper>
  );
};

export default CartTitle;
