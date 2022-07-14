import TopBanners from "../components/TopBanners";
import FollowingPDSection from "../components/FollowingPDSection";
import HashtagSection from "../components/HashtagSection";
import PopularSection from "../components/PopularSection";

const Home = () => {
  return (
    <>
      <TopBanners />;
      <FollowingPDSection />
      <PopularSection />
      <HashtagSection />
    </>
  );

};

export default Home;
