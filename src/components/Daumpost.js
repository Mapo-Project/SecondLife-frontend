import REACT, { useState } from "react";
import DaumPostCode from "react-daum-postcode";
import styled from "styled-components";

const postCodeStyle = {
  //   display: "block",
  position: "absolute",
  top: "100%",
  left: "-10%",
  width: "550px",
  height: "460px",
  padding: "7px",
  zIndex: 100,
};

const DaumPost = (props) => {
  const setUser = props.setUser;
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
    setUser((preState) => {
      return { ...preState, address: fullAddress };
    });
    // setAddress1(fullAddress);
    console.log(fullAddress);
  };
  return (
    <div>
      <DaumPostCode
        autoClose
        onComplete={handleComplete}
        style={postCodeStyle}
      />
    </div>
  );
};
export default DaumPost;
