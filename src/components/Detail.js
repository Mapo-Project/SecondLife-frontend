import { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import TitleInHome from "./TitleInHome";
import ItemImages from "./ItemImages";
import { itemsData } from "../utils/itemsData";
import CartModal from "./CartModal";

const TopWrapper = styled.div`
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  width: 1410px;
  margin: 0 auto;
  background-color: #fafafa;
  padding-top: 41px;
  padding-bottom: 130px;
  position: relative;
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContents = styled.div`
  margin-right: 150px;
`;
const RightContents = styled.div``;

const BigImg = styled.div`
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
    /* border: 1px solid #000000; */
  }
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const detailData = [
  {
    images: [
      `${imgUrl}detailImg/1.png`,
      `${imgUrl}detailImg/2.png`,
      `${imgUrl}detailImg/3.png`,
      `${imgUrl}detailImg/4.png`,
    ],
    seller_img: `${imgUrl}detailImg/seller_img.png`,
    seller_id: "XXXfkjeXXX",
    description: `90년대 빈티지한 무드의 형광팬츠입니다.

    200n년도에 구입을 했었고
    아까워서 몇번 못입다가 팔게되었습니다.
    
    착용이 3번 미만이라 새거나 다름이 없어요.
    사이즈는 xl 인데 오버사이즈로 
    입으시면 예쁩니다. 정사이즈 핏도 
    괜찮아요!
    
    신축성이 좋아 착용감에 불편함이 없고
    포인트룩으로 입기 좋아요...! 
    예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.예쁘게 입으시길 바랍니다.`,
    hashtags: [
      "맨투맨",
      "네온",
      "비비드",
      "빈티지",
      "캐주얼 맨투맨",
      "맨투맨",
      "네온",
      "비비드",
      "빈티지",
      "팬츠",
    ],
    product_name: "그레이 이글 맨투맨",
    product_size: "M",
    product_condition: "좋음",
    product_brand: "Ralph Lauren",
    product_color: "그레이, 브라운",
    product_price: 18000,
  },
];

let price = 0;

const Detail = () => {
  const [detailImg, setDetailImg] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    detailData.forEach((elm) => {
      setDetailImg(elm.images[0]);
    });
  }, []);

  const handleClickCart = () => {
    setShowModal(true);
  };

  return (
    <TopWrapper>
      <CartModal showModal={showModal} setShowModal={setShowModal} />
      <Navbar />
      <Wrapper>
        {detailData.map((elm) => {
          if (elm.product_price) {
            price = elm.product_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          return (
            <>
              <ContentsWrapper>
                <LeftContents>
                  <BigImg style={{ backgroundImage: `url(${detailImg})` }} />
                  <SmallImages>
                    {elm.images.map((img, idx) => {
                      return (
                        <SmallImgWrapper key={idx}>
                          <SmallImgCover
                            className={detailImg !== img && "cover"}
                            onClick={() => {
                              setDetailImg(img);
                            }}
                          />
                          <SmallImg
                            style={{ backgroundImage: `url(${img})` }}
                          />
                        </SmallImgWrapper>
                      );
                    })}
                  </SmallImages>
                </LeftContents>
                <RightContents>
                  <SellerProfile>
                    <div
                      className="profile-img"
                      style={{ backgroundImage: `url(${elm.seller_img})` }}
                    />
                    <h2 className="profile-id">{elm.seller_id}</h2>
                  </SellerProfile>
                  <Description>
                    <p>{elm.description}</p>
                  </Description>
                  <Hashtags>
                    {elm.hashtags.map((hashtag, idx) => {
                      return <Hashtag key={idx}>#{hashtag}</Hashtag>;
                    })}
                  </Hashtags>
                  <Information>
                    <InformTitle>
                      <h2>그레이 이글 맨투맨</h2>
                      <div>
                        <img
                          src={`${imgUrl}icons/detail_heart.svg`}
                          alt="like"
                        />
                        <img src={`${imgUrl}icons/share.svg`} alt="share" />
                      </div>
                    </InformTitle>
                    <InformTable>
                      <tr>
                        <td>사이즈</td>
                        <td>{elm.product_size}</td>
                        <td>상태</td>
                        <td>{elm.product_condition}</td>
                      </tr>
                      <tr>
                        <td>브랜드</td>
                        <td>{elm.product_brand}</td>
                        <td>물</td>
                        <td>1,150L 절약</td>
                      </tr>
                      <tr>
                        <td>색상</td>
                        <td>{elm.product_color}</td>
                        <td>탄소</td>
                        <td>5.3kg 절약</td>
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
                {elm.images.map((img, idx) => {
                  return (
                    <div
                      key={idx}
                      className="detail-img"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  );
                })}
              </DetailImages>
              <TitleInHome title={"이 셀러가 판매하는 다른 상품"} />
              <ItemImages items={itemsData} />
            </>
          );
        })}
      </Wrapper>
    </TopWrapper>
  );
};

export default Detail;
