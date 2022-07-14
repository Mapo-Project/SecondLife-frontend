import TopBanners from "../components/TopBanners";
import FollowingPDSection from "../components/FollowingPDSection";
import HashtagSection from "../components/HashtagSection";
import PopularSection from "../components/PopularSection";
import TodayPick from "../components/TodayPick";

const Home = () => {
  return (
    <>
      <TopBanners />;
      <FollowingPDSection />
      <PopularSection />
      <HashtagSection />
      <TodayPick />
    </>
  );
};

export default Home;
