import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import TitleInHome from "./TitleInHome";
import ItemImages from "./ItemImages";
import { itemsData } from "../utils/itemsData";
import CartModal from "./CartModal";
import { useParams, Link, useNavigate } from "react-router-dom";
import { detailData } from "../utils/detailData";

const TopWrapper = styled.div`
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  width: 1410px;
  margin: 0 auto;
  background-color: #fafafa;
  padding-bottom: 130px;
  position: relative;
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 41px;
`;

const LeftContents = styled.div`
  margin-right: 150px;
`;
const RightContents = styled.div``;

const BigImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 690px;
  height: 690px;
  transition: 0.4s ease-in-out;
`;

const SmallImages = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SmallImgWrapper = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
`;

const SmallImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const SmallImgCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.4s ease-in-out;
  &.cover {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const SellerProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .profile-img {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    border: 2px solid #000;
    margin-right: 32px;
    background-position: center;
    background-size: contain;
  }
  .profile-id {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    letter-spacing: 0.18px;
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

const Description = styled.div`
  margin-top: 24px;
  width: 293px;
  max-height: 280px;
  overflow-y: scroll;
  ${({ theme }) => theme.korean.body1};
  color: ${({ theme }) => theme.colors.gray900};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Hashtags = styled.div`
  max-width: 570px;
  margin-top: 16px;
`;

const Hashtag = styled.button`
  margin-right: 8px;
  margin-bottom: 4px;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 50px;
  ${({ theme }) => theme.korean.subtitle1};
  color: ${({ theme }) => theme.colors.gray900};
`;

const Information = styled.div`
  margin-top: 9px;
  width: 564px;
`;

const InformTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray700};
  h2 {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    letter-spacing: 0.18px;
  }
  div {
    img: nth-last-child(1) {
      margin-left: 15px;
    }
  }
`;

const InformTable = styled.table`
  margin-top: 11px;
  width: 100%;
  ${({ theme }) => theme.korean.body1};
  color: ${({ theme }) => theme.colors.gray900};
  td {
    padding: 8px 0px;
  }
  td:nth-child(odd) {
    width: 66px;
  }
`;

const InformPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-top: 2px solid ${({ theme }) => theme.colors.gray700};
  padding-top: 16px;
  margin-top: 11px;
  h3 {
    color: ${({ theme }) => theme.colors.gray900};
    ${({ theme }) => theme.english.headline6};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
  button {
    width: 280px;
    height: 56px;
    border: 2px solid ${({ theme }) => theme.colors.gray900};
    border-radius: 10px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 10px;
    color: ${({ theme }) => theme.colors.gray900};
    cursor: pointer;
  }
  .cart {
    background-color: #f0f0f0;
  }
  .purchase {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const DetailImages = styled.div`
  margin-top: 120px;
  margin-bottom: 165px;
  width: calc(705px * 2);
  height: calc(705px * 2);
  background-color: lightgrey;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  .detail-img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* border: 1px solid #000000; */
  }
`;

const CategoryRoute = styled.ul`
  display: flex;
  ${({ theme }) => theme.korean.body2}
  color: ${({ theme }) => theme.gray700};
  margin-top: 16px;
  li {
    cursor: pointer;
  }
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

let price = 0;

const Detail = () => {
  let paramsId = parseInt(useParams().id);

  let productData = {};

  useEffect(() => {
    setDetailImg(images[0]);
  }, []);

  detailData.forEach((it) => {
    if (it.id === paramsId) {
      productData = { ...it };
    }
  });

  let {
    images,
    seller_img,
    seller_id,
    description,
    hashtags,
    product_name,
    product_size,
    product_condition,
    product_brand,
    product_color,
    product_price,
    water,
    carbon,
    parent1_name,
    parent2_name,
    parent1_url,
    parent2_url,
  } = { ...productData };
  const [detailImg, setDetailImg] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClickCart = () => {
    setShowModal(true);
  };

  if (product_price) {
    price = product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const navigate = useNavigate();

  return (
    <TopWrapper>
      <CartModal showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <Wrapper>
        <CategoryRoute>
          <Link to="/">
            <li>홈</li>
          </Link>
          <li
            onClick={() => {
              if (parent2_url) {
                navigate(`/${parent2_url}`);
              }
              return;
            }}
          >
            &nbsp;/ 카테고리
          </li>
          <li
            onClick={() => {
              if (parent1_url) {
                navigate(`/${parent1_url}`);
              }
              return;
            }}
          >
            &nbsp;/ {parent2_name}
          </li>
          <li>&nbsp;/ {parent1_name}</li>
        </CategoryRoute>
        <ContentsWrapper>
          <LeftContents>
            <BigImg style={{ backgroundImage: `url(${detailImg})` }} />
            <SmallImages>
              {images.map((img, idx) => {
                return (
                  <SmallImgWrapper key={idx}>
                    <SmallImgCover
                      className={detailImg !== img && "cover"}
                      onClick={() => {
                        setDetailImg(img);
                      }}
                    />
                    <SmallImg style={{ backgroundImage: `url(${img})` }} />
                  </SmallImgWrapper>
                );
              })}
            </SmallImages>
          </LeftContents>
          <RightContents>
            <SellerProfile>
              <div
                className="profile-img"
                style={{ backgroundImage: `url(${seller_img})` }}
              />
              <h2 className="profile-id">{seller_id}</h2>
            </SellerProfile>
            <Description>
              <p>
                {description.split("\n").map((elm) => (
                  <>
                    {elm}
                    <br />
                  </>
                ))}
              </p>
            </Description>
            <Hashtags>
              {hashtags.map((hashtag, idx) => {
                return <Hashtag key={idx}>#{hashtag}</Hashtag>;
              })}
            </Hashtags>
            <Information>
              <InformTitle>
                <h2>{product_name}</h2>
                <div>
                  <img src={`${imgUrl}icons/detail_heart.svg`} alt="like" />
                  <img src={`${imgUrl}icons/share.svg`} alt="share" />
                </div>
              </InformTitle>
              <InformTable>
                <tr>
                  <td>사이즈</td>
                  <td>{product_size}</td>
                  <td>상태</td>
                  <td>{product_condition}</td>
                </tr>
                <tr>
                  <td>브랜드</td>
                  <td>{product_brand}</td>
                  <td>물</td>
                  <td>{water}L 절약</td>
                </tr>
                <tr>
                  <td>색상</td>
                  <td>{product_color}</td>
                  <td>탄소</td>
                  <td>{carbon}kg 절약</td>
                </tr>
              </InformTable>
              <InformPrice>
                <h3>{price} 원</h3>
              </InformPrice>
              <ButtonWrapper>
                <button className="cart" onClick={handleClickCart}>
                  장바구니
                </button>
                <button className="purchase">바로구매</button>
              </ButtonWrapper>
            </Information>
          </RightContents>
        </ContentsWrapper>
        <DetailImages>
          {images.map((img, idx) => {
            if (idx > 0) {
              return (
                <div
                  key={idx}
                  className="detail-img"
                  style={{ backgroundImage: `url(${img})` }}
                />
              );
            }
          })}
        </DetailImages>
        <TitleInHome title={"이 셀러가 판매하는 다른 상품"} />
        <ItemImages items={itemsData} />
      </Wrapper>
    </TopWrapper>
  );
};

export default Detail;
