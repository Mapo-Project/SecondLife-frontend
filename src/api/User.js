// promise 요청 타임아웃 시간 선언
const TIME_OUT = 300 * 1000;

// 에러 처리를 위한 status 선언
const statusError = {
  status: false,
  json: {
    error: ["연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요"],
  },
};

// 백으로 요청할 promis
const requestPromise = (url, option) => {
  return fetch(url, option);
};

// promise 타임아웃 처리
const timeoutPromise = () => {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), TIME_OUT)
  );
};

// promise 요청
const getPromise = async (url, option) => {
  return await Promise.race([requestPromise(url, option), timeoutPromise()]);
};

// 백으로 로그인 요청
export const loginUser = async (credentials) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(credentials),
  };

  const data = await getPromise(
    "https://hee-backend.shop:7179/user/general/signin",
    option
  ).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : "";

    return {
      status,
      code,
      json,
    };
  } else {
    return statusError;
  }
};

// 백으로 로그아웃 요청
export const logoutUser = async (accessToken) => {
  const option = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const data = await getPromise(
    "https://hee-backend.shop:7179/user/logout",
    option
  ).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : "";

    return {
      status,
      code,
      json,
    };
  } else {
    return statusError;
  }
};

// 백으로 토큰 다시 요청
export const requestToken = async (refresh_Token) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ refreshToken: refresh_Token }),
  };

  const data = await getPromise(
    "https://hee-backend.shop:7179/auth/token/reissuance",
    option
  ).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : "";

    return {
      status,
      code,
      json,
    };
  } else {
    return statusError;
  }
};

// 로컬 스토리지에 자동로그인 상태 가져오기
export const getValueOnLocalStorage = (key) => {
  let val = localStorage.getItem(key);
  return JSON.parse(val);
};

// 로컬 스토리지에 자동로그인 상태 변경하기
export const setValueOnLocalStorage = (key, value) => {
  let val = JSON.stringify(value);
  localStorage.setItem(key, val);
};

// 회원정보 조회
export const selectUserProfile = async (accessToken) => {
  const option = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const data = await getPromise(
    "https://hee-backend.shop:7179/user/profile/select",
    option
  ).catch(() => {
    return statusError;
  });

  if (parseInt(Number(data.status) / 100) === 2) {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : "";

    return {
      status,
      code,
      json,
    };
  } else {
    return statusError;
  }
};