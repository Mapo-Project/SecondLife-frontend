import TopBanners from "../components/TopBanners";
import FollowingPDSection from "../components/FollowingPDSection";
import HashtagSection from "../components/HashtagSection";
import PopularSection from "../components/PopularSection";
import TodayPick from "../components/TodayPick";
import FollowingList from "../components/FollowingList";

const Home = () => {
  return (
    <>
      <TopBanners />;
      <FollowingPDSection />
      <PopularSection />
      <HashtagSection />
      <TodayPick />
      <FollowingList />
    </>
  );
};

export default Home;
