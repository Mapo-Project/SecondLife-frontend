import styled from "styled-components";

const TopWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: none;

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Modal = styled.div`
  width: 611px;
  height: 364px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  .first-content {
    margin-top: 128px;
    h2 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 36px;
    }
  }
  .second-content {
    display: flex;
    justify-content: space-between;
    margin-top: 102px;
    width: calc(255px * 2 + 31px);
    button {
      width: 255px;
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 36px;
      background-color: #fff;
      border: 1px solid #000000;
      cursor: pointer;
    }
  }
`;

const CartModal = ({ showModal, setShowModal }) => {
  return (
    <TopWrapper className={showModal && "active"}>
      <Modal>
        <div className="first-content">
          <h2>장바구니에 상품이 추가되었습니다!</h2>
        </div>
        <div className="second-content">
          <button>장바구니 확인하기</button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            계속 쇼핑하기
          </button>
        </div>
      </Modal>
    </TopWrapper>
  );
};

export default CartModal;
