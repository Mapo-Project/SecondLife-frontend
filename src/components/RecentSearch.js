import { useEffect, useState } from "react";
import styled from "styled-components";
// import { locationData } from "../utils/locationData";
import { useSelector } from "react-redux";
import { selectPickupPlace, deletePickupPlace } from "../api/PickUpApi";

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e2e6;
  padding-bottom: 11.09px;
  margin-bottom: 14.92px;
  :nth-last-child(1) {
    margin-bottom: 0;
  }
  .delete-btn {
    cursor: pointer;
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.gray700};
    margin-left: 10px;
    cursor: pointer;
  }
`;

const RecentSearch = ({ fullAdd, setFullAdd, setIsClicked }) => {
  const [locationData, setLocationData] = useState([]);
  // const [recentSearch, setRecentSearch] = useState(locationData);
  const recentSearchClick = (address) => {
    setFullAdd(address);
    setTimeout(() => {
      setIsClicked("when");
    }, 1000);
  };

  const { accessToken } = useSelector((state) => state.token);

  const onRemove = async (id) => {
    const status = await deletePickupPlace(accessToken, id);
    if (status === 200) {
      setLocationData(
        locationData.filter((location) => location.pick_up_loc_id !== id)
      );
      return;
    }
  };

  const showPickUpPlace = async () => {
    const recentSearchPlace = await selectPickupPlace(accessToken);
    setLocationData(recentSearchPlace);
  };

  useEffect(() => {
    showPickUpPlace();
  }, [accessToken]);
  return (
    <>
      {locationData.map((location) => {
        return (
          <TopWrapper key={location.pick_up_loc_id}>
            <Location>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/icons/map-pin.png`}
                alt="map pin"
              />
              <p onClick={() => recentSearchClick(location.address)}>
                {location.address}
              </p>
            </Location>
            <img
              className="delete-btn"
              src={`${process.env.PUBLIC_URL}/assets/images/icons/close_btn.png`}
              alt="delete button"
              onClick={() => onRemove(location.pick_up_loc_id)}
            />
          </TopWrapper>
        );
      })}
    </>
  );
};

export default RecentSearch;
