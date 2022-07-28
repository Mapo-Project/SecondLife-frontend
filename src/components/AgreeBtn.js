import styled from "styled-components";

const AgreeBtnWrapper = styled.div`
  position: sticky;
  bottom: 0px;
  margin-bottom: 38px;
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
  pointer-events: none;
`;

const AgreeBtn = ({ children, active }) => {
  return (
    <AgreeBtnWrapper className={active && "btn_active"}>
      {children}
    </AgreeBtnWrapper>
  );
};

export default AgreeBtn;
