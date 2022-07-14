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

const Home = () => {
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
      <FollowingList />
    </>
  );
};

export default Home;
