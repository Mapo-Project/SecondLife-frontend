import styled, { keyframes } from "styled-components";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Appear = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Disappear = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const ProductImgWrapper = styled.div`
  width: 210px;
  height: 210px;
  position: relative;
`;

const BigHeart = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: none;
  opacity: 0;
  &.start {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${Appear} 0.5s linear;
  }
  &.end {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${Disappear} 1s linear;
  }
`;

const ProductImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .like {
    margin-top: 5px;
    margin-left: 13px;
    img {
      margin-right: 5px;
    }
  }
  .bottom-contents {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    img {
      cursor: pointer;
      width: 29.15px;
      height: 29.15px;
      margin-right: 8.4px;
      margin-bottom: 8.3px;
    }
  }
  .like {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 11px;
    line-height: 24px;
    color: #fff;
  }
  .size {
    width: 26px;
    height: 28px;
    background-color: ${({ theme }) => theme.colors.gray900};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;

const TopWrapper = styled.div`
  display: grid;
  width: 1170px;
  background-color: #fff;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 52px;
  margin-top: 28px;
`;

const ProductInform = styled.div`
  width: 210px;
  background-color: #fff;
  h6 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 12px;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

const AboutPrice = styled.div`
  display: flex;
  justify-content: space-between;
  h5 {
    ${({ theme }) => theme.english.caption};
  }
  button {
    width: 51px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray900};
    cursor: pointer;
    span {
      ${({ theme }) => theme.korean.caption};
    }
  }
  .inCart {
    background-color: ${({ theme }) => theme.colors.gray900};
    color: #fff;
  }
  .notInCart {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const brandNameStyle = { margin: `5px 0` };

const ProductImage = ({ elm, products, setProducts }) => {
  const [appearance, setAppearance] = useState(false);

  const handleBlankClick = (id) => {
    let result = products.map((product) =>
      product.id === id
        ? {
            ...product,
            like_num: product.like_num + 1,
            isLike: !product.isLike,
          }
        : product
    );
    setProducts(result);
    setAppearance(true);
    setTimeout(() => {
      setAppearance(false);
    }, 1000);
  };

  const handleFilledClick = (id) => {
    let result = products.map((product) =>
      product.id === id
        ? {
            ...product,
            like_num: product.like_num - 1,
            isLike: !product.isLike,
          }
        : product
    );
    setProducts(result);
  };

  return (
    <ProductImgWrapper>
      <ProductImg style={{ backgroundImage: `url(${elm.product_img_url})` }}>
        <div className="like">
          <img src={`${imgUrl}icons/like.svg`} alt="" />
          {elm.like_num}
        </div>
        <div className="bottom-contents">
          <div className="size">{elm.size}</div>
          {elm.isLike ? (
            <img
              src={`${imgUrl}icons/filled_heart.svg`}
              alt=""
              onClick={() => handleFilledClick(elm.id)}
            />
          ) : (
            <img
              src={`${imgUrl}icons/blank_heart.svg`}
              alt=""
              onClick={() => handleBlankClick(elm.id)}
            />
          )}
        </div>
      </ProductImg>
      <BigHeart className={appearance && "start"}>
        <img src={`${imgUrl}icons/big_blank.svg`} alt="" />
      </BigHeart>
      <BigHeart className={appearance && "end"}>
        <img src={`${imgUrl}icons/big_filled.svg`} alt="" />
      </BigHeart>
    </ProductImgWrapper>
  );
};

const ProductList = ({ products, setProducts }) => {
  const handleCartClick = (id) => {
    let result = products.map((product) =>
      product.id === id
        ? {
            ...product,
            inCart: !product.inCart,
          }
        : product
    );
    setProducts(result);
  };

  return (
    <TopWrapper>
      {products.map((elm) => {
        let price = 0;
        if (elm.price) {
          price = elm.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return (
          <ProductInform key={elm.id}>
            <ProductImage
              elm={elm}
              setProducts={setProducts}
              products={products}
            />
            <h6 style={brandNameStyle}>H&M</h6>
            <h6>레오파드 맥시스커트</h6>
            <AboutPrice>
              <h5>{price}원</h5>
              {elm.inCart ? (
                <button
                  className="notInCart"
                  onClick={() => handleCartClick(elm.id)}
                >
                  <span>빼기</span>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              ) : (
                <button
                  className="inCart"
                  onClick={() => handleCartClick(elm.id)}
                >
                  <span>담기</span>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              )}
            </AboutPrice>
          </ProductInform>
        );
      })}
    </TopWrapper>
  );
};

export default ProductList;
