import axios from "axios";
import CryptoJS from "crypto-js";

const Test = () => {
  let password = "3456";
  const inform = {
    user_id: "zxcvzxcv",
    password: "3456",
    name: "zxcvzxcv",
    birth: "1111-01-01",
    email: "zxcvzxcv@secondLife.com",
    phone_num: "01098765432",
    address: "서울특별시 마포구 성산로 4길 53",
    detail_address: "마포구청사 제3별관",
    phone_verify: "Y",
  };

  const onSubmit = async () => {
    try {
      //비밀번호를 SHA256으로 해싱한다.
      const hash = CryptoJS.SHA256(password);
      console.log(typeof hash);
      //해싱된 객체를 Base64로 toString으로 만든다.
      const hashPassword = hash.toString(CryptoJS.enc.Base64);
      //패스워드로 다시 반환한다

      let newInform = { ...inform, password: hashPassword };
      console.log(newInform);

      const response = await axios.post(
        `https://hee-backend.shop:7179/user/general/signup`,
        newInform
      );
      console.log(response);
    } catch (error) {
      console.log("encryptPW error:", error);
      alert("회원가입 실패");
    }
  };

  return (
    <>
      <button onClick={onSubmit}>버튼</button>
      <p>{password}</p>
    </>
  );
};

export default Test;
