import styled from "styled-components";

const AgreeBtnWrapper = styled.div`
  ${({ theme }) => theme.korean.headline6}
  letter-spacing: 10px;
  width: 450px;
  height: 62px;
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.gray700};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AgreeBtn = () => {
  return <AgreeBtnWrapper>동의하기</AgreeBtnWrapper>;
};

export default AgreeBtn;
