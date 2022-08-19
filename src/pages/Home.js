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
import PickUpPopup from "../components/PickUpPopup";
import BrandSection from "../components/BrandSection";
import NewItemSection from "../components/NewItemSection";
import Footer from "../components/Footer";
import Check from "../auth/Check";
import StepSection from "../components/StepSection";

const Home = () => {
  return (
    <>
      <Check />
      <TopBanners />
      <RollingBanner type={BannerData[0]}>
        {textData[0]} <span>짃</span> !{textData[1]} <span>짃</span> !
      </RollingBanner>
      <StepSection />
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
      <PickUpPopup />
    </>
  );
};

export default Home;
