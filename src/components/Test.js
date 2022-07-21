import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Test = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur", criteriaMode: "all" });
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };

  console.log(errors.id);

  const [watchId, watchPW] = watch(["id", "password"]);
  const [showPW, setShowPW] = useState(false);
  const [checkIdRes, setCheckIdRes] = useState(false);

  const checkId = async (user_id) => {
    if (user_id) {
      setCheckIdRes(false);
      try {
        const response = await axios.get(
          `https://hee-backend.shop:7179/user/general/duplicate/id/${user_id}`
        );
        if (response.status === 200) {
          console.log(response.data);
          if (response.data.duplicate === "unDuplicate") {
            setCheckIdRes(true);
          } else {
            setCheckIdRes(false);
          }
        }
      } catch (error) {
        console.log("checkId error:", error);
      }
    }
    return;
  };
  console.log(checkIdRes);

  const clickEyeHandler = () => {
    setShowPW(!showPW);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          placeholder="example123"
          {...register("id", {
            required: true,
            pattern: /^[a-z0-9.]{6,20}$/,
          })}
          onBlur={(e) => checkId(e.target.value)}
        />
        <br />
        {errors.id && "영문, 숫자 6에서 20글자 사이어야 합니다."}
        {isValid && checkIdRes && "사용 가능한 아이디입니다."}
        <br />
        {showPW ? (
          <input
            className={
              errors.password?.type === "mustContainLowerUpper" &&
              "mustContainDigitSign" &&
              "minLength"
            }
            type="text"
            placeholder="영어 대문자, 소문자, 숫자, 특수문자를 포함한 10자리 이상
            "
            {...register("password", {
              required: true,
              validate: {
                mustContainLowerUpper: (v) =>
                  /(?=.*?[ a-z])(?=.*?[A-Z])/.test(v),
                mustContainDigitORSign: (v) =>
                  /(?=.*?[0-9])|(?=.*?[#?!@$%^&*-])/.test(v),
              },
              minLength: 10,
            })}
          />
        ) : (
          <input
            type="password"
            placeholder="영어 대문자, 소문자, 숫자, 특수문자를 포함한 10자리 이상
            "
            {...register("password", {
              validate: {
                mustContainLowerUpper: (v) =>
                  /(?=.*?[a-z])(?=.*?[A-Z])/.test(v),
                mustContainDigitORSign: (v) =>
                  /(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(v),
              },
              minLength: 10,
            })}
          />
        )}
        {showPW ? (
          <button onClick={clickEyeHandler}>숨김</button>
        ) : (
          <button onClick={clickEyeHandler}>보임</button>
        )}
        {watchPW && (
          <>
            <p>
              {errors.password?.types.mustContainLowerUpper === true
                ? "X"
                : "V"}
              소문자 및 대문자 모두 포함
            </p>
            <p>
              {errors.password?.types.mustContainDigitORSign === true
                ? "X"
                : "V"}
              숫자 및 기호 포함
            </p>
            <p>
              {errors.password?.types.minLength === true ? "X" : "V"}
              문자길이 최소 10자 이상
            </p>
          </>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Test;
