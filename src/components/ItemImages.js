import styled from "styled-components";

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .item-wrapper:hover > * {
    opacity: 1;
  }
  /* .item-wrapper:nth-last-child(1) {
    margin-right: 0px;
  } */
`;

const ItemWrapper = styled.div`
  position: relative;
  width: 222px;
  height: 222px;
  /* margin-right: 16px; */
  .hover-img {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    /* transition: 0.3s ease-in-out; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
  }
  .item-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
`;

const Texts = styled.div`
  margin-right: 16px;
  margin-bottom: 16px;
  color: #fff;
  text-align: right;
  p:nth-child(1) {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }
  p:nth-child(2) {
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  span {
    font-size: 15px;
    line-height: 15px;
    margin-left: 4px;
  }
`;

const ItemImages = ({ items }) => {
  return (
    <TopWrapper>
      {items.map((item) => {
        let price = 0;
        if (item.price) {
          price = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return (
          <ItemWrapper className="item-wrapper">
            <div className="hover-img">
              <Texts>
                {item.size && <p>{item.size}</p>}
                {item.price && (
                  <p>
                    {price}
                    <span>원</span>
                  </p>
                )}
              </Texts>
            </div>
            <div
              className="item-img"
              style={{
                backgroundImage: `url(${item.imgUrl})`,
              }}
            />
          </ItemWrapper>
        );
      })}
    </TopWrapper>
  );
};

export default ItemImages;
