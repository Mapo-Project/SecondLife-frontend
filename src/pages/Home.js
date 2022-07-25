import TopBanners from "../components/TopBanners";
import FollowingPDSection from "../components/FollowingPDSection";
import HashtagSection from "../components/HashtagSection";
import PopularSection from "../components/PopularSection";
import TodayPick from "../components/TodayPick";
import FollowingList from "../components/FollowingList";
import RollingBanner, {
  BannerData,
  textData,
} from "../components/RollingBanner";
import TopSellerSection from "../components/TopSellerSection";
import BottomBanners from "../components/BottomBanner";
import Circle from "../components/Circle";
import BrandSection from "../components/BrandSection";
import NewItemSection from "../components/NewItemSection";
import Footer from "../components/Footer";
import { getCookieToken } from "../storage/Cookie";
import { useEffect } from "react";
import Logout2 from "../components/Logout2";
import { setRefreshToken } from "../storage/Cookie";
import { SET_TOKEN } from "../store/Auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const Home = () => {
  const refreshToken = getCookieToken();
  const url = new URL(window.location.href);

  // URLSearchParams 객체
  const urlParams = url.searchParams;
  const user = JSON.parse(urlParams.get("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onKakao = () => {
    if (user) {
      setRefreshToken(user.refreshToken);
      dispatch(SET_TOKEN(user.accessToken));
      return navigate("/");
    } else {
      console.log("no Kako");
    }
  };
  useEffect(() => {
    onKakao();
    console.log(user);
  }, []);
  return (
    <>
      <TopBanners />
      <RollingBanner type={BannerData[0]}>
        {textData[0]} <span>짃</span> !{textData[1]} <span>짃</span> !
      </RollingBanner>
      <FollowingPDSection />
      <PopularSection />
      <HashtagSection />
      <TodayPick />
      <RollingBanner type={BannerData[1]}>{textData[2]}</RollingBanner>
      <RollingBanner type={BannerData[2]}>{textData[3]}</RollingBanner>
      <TopSellerSection />
      <FollowingList />
      <NewItemSection />
      <BrandSection />
      <BottomBanners />
      <Footer />
      <Circle />
      {refreshToken ? <Logout2 /> : null}
    </>
  );
};

export default Home;
