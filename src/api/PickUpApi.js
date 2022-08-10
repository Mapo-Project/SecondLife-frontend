import axios from "axios";

export const selectPickupPlace = async (accessToken) => {
  try {
    const option = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const response = await axios.get(
      `https://hee-backend.shop:7179/pickup/place/select`,
      option
    );
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log("selectPickupPlace Error", error);
  }
};

export const registPickupPlace = async (accessToken, fullAdd) => {
  try {
    const option = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    };
    const address = {
      address: fullAdd,
    };
    const response = await axios.post(
      `https://hee-backend.shop:7179/pickup/place/registration`,
      address,
      option
    );
    const data = response.data;
    // console.log(data);
  } catch (error) {
    console.log("registPickupPlace Error", error);
  }
};

export const deletePickupPlace = async (accessToken, id) => {
  try {
    const option = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.delete(
      `https://hee-backend.shop:7179/pickup/place/${id}`,
      option
    );
    const statusCode = response.data.statusCode;
    // console.log("deletePickupPlace", statusCode);
    return statusCode;
  } catch (error) {
    const response = error.response;
    console.log("deletePickupPlace Error", response);
  }
};
