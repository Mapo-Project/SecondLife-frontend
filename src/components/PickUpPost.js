import DaumPostCode from "react-daum-postcode";
import styled from "styled-components";
import "../css/Post.css";
const TopWrapper = styled.div``;

// 픽업장소 선택 - 다음 주소 검색 API
const PickUpPost = ({ setAddress }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setAddress(fullAddress);
  };
  return (
    <TopWrapper>
      <DaumPostCode onComplete={handleComplete} />
    </TopWrapper>
  );
};

export default PickUpPost;
