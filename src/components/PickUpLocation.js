import { useState } from "react";
import styled, { keyframes } from "styled-components";
import PickUpPost from "./PickUpPost";
import RecentSearch from "./RecentSearch";
import { useSelector } from "react-redux";
import { registPickupPlace } from "../api/PickUpApi";

const anim = keyframes`
0%{
transform: scaleY(0);
opacity: 0.9;
}
100%{
transform: scaleY(1);
opacity: 1;
}
`;

const TopWrapper = styled.div`
  width: 420px;
  margin: 10px auto 10px;
  padding: 20px 24px 22px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  animation: ${anim} 0.5s ease-in-out;
  transform-origin: top;
  h6 {
    font-family: "Noto Sans KR";
    font-weight: 350;
    font-size: 11px;
    line-height: 17px;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #515050;
  }
  h6 {
    color: #bebebe;
    cursor: pointer;
  }
  .research {
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

const SearchSection = styled.div`
  width: 374px;
  height: 44px;
  background-color: #e7e6e4;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px 0px 9px;
  margin-top: 22px;
  p {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.gray500};
  }
  .search {
    width: 32px;
  }
`;

const ResultWrapper = styled.div`
  width: 374px;
  height: 132px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  margin-top: 20px;

  h6 {
    margin-left: 17px;
    margin-bottom: 16px;
  }
`;

const LocationResult = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  img {
    margin-left: 17.03px;
  }
  p {
    margin-left: 10px;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 339px;
  margin: 0 auto 17px;
  input[type="text"] {
    padding-bottom: 6px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.colors.black};
  }
  button {
    width: 45px;
    height: 22px;
    position: absolute;
    right: 0;
    background-color: ${({ theme }) => theme.colors.black};
    border: none;
    border-radius: 24px;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.4px;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.black};
    &.disable {
      background-color: ${({ theme }) => theme.colors.gray300};
      color: ${({ theme }) => theme.colors.gray500};
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.green300};
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const AddressResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 23.88px;
  p {
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.25px;
    margin-left: 13.03px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const RecentSearchWrapper = styled.div`
  margin-top: 35px;
  h6 {
    margin-bottom: 10.5px;
  }
`;

const PickUpLocation = ({ fullAdd, setFullAdd, setIsClicked }) => {
  const [address, setAddress] = useState("");
  const [detailAdd, setDetailAdd] = useState("");
  const [isClicked2, setIsClicked2] = useState(false);

  const toggle = () => {
    setIsClicked2(!isClicked2);
  };

  const handleAddChange = (e) => {
    setDetailAdd(e.target.value);
  };

  const { accessToken } = useSelector((state) => state.token);

  const handleAddClick = () => {
    const result = `${address} ${detailAdd}`;
    console.log(result);
    setFullAdd(result);
    registPickupPlace(accessToken, result);
    setTimeout(() => {
      setIsClicked("when");
    }, 1000);
  };

  const handleFullAddClick = () => {
    setAddress("");
    setDetailAdd("");
    setFullAdd("");
    setIsClicked2(false);
  };

  return (
    <TopWrapper>
      <Title>
        <h3>픽업을 원하는 장소를 검색하세요</h3>
        {fullAdd ? (
          <h6 className="research" onClick={handleFullAddClick}>
            주소 다시 찾아보기
          </h6>
        ) : (
          <h6>내 현재 위치 찾기</h6>
        )}
      </Title>
      {!isClicked2 && !fullAdd && (
        <SearchSection>
          <p onClick={toggle}>도로명주소 또는 건물명을 입력하세요.</p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/search2.png`}
            alt="search button"
          />
        </SearchSection>
      )}
      {isClicked2 && (
        <div>
          <PickUpPost
            isClicked={isClicked2}
            setIsClicked={setIsClicked2}
            address={address}
            setAddress={setAddress}
          />
        </div>
      )}
      {address && !fullAdd && (
        <ResultWrapper>
          <LocationResult>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icons/green-map-pin.png`}
              alt="map pin"
            />
            <p>{address}</p>
          </LocationResult>
          <h6>상세주소를 입력하세요</h6>
          <InputWrapper>
            <input type="text" value={detailAdd} onChange={handleAddChange} />
            <button
              className={!detailAdd && "disable"}
              onClick={handleAddClick}
              disabled={detailAdd ? false : true}
            >
              확인
            </button>
          </InputWrapper>
        </ResultWrapper>
      )}
      {!isClicked2 && !fullAdd && (
        <RecentSearchWrapper>
          <h6>최근 검색어</h6>
          <RecentSearch
            fullAdd={fullAdd}
            setFullAdd={setFullAdd}
            setIsClicked={setIsClicked}
          />
        </RecentSearchWrapper>
      )}
      {fullAdd && (
        <AddressResult>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/green-map-pin.png`}
            alt="map pin"
          />
          <p>{fullAdd}</p>
        </AddressResult>
      )}
    </TopWrapper>
  );
};

export default PickUpLocation;
