import BannerSection from "./components/BannerSection";
import BlogArticleSection from "./components/BlogArticleSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowAllNovasWorksSection from "./components/HowAllNovasWorksSection";
import MissionSection from "./components/MissionSection";
import Newsletter from "./components/Newsletter";
import NicheSection from "./components/NicheSection";
import ResourcesSection from "./components/ResourcesSection";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MissionSection />
      <NicheSection />
      <WhyChooseUs />
      <HowAllNovasWorksSection />
      <ResourcesSection />
      <BannerSection />
      <CommunitySection />
      <BlogArticleSection />
      <FrequentlyAskedQuestions />
      <Newsletter />
      <Footer />
    </>
  );
}
 
export default App;