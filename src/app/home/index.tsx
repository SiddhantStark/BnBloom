import Search from '@/features/search';
import HeroSection from './hero-section';
import TrendingDestination from './trending-destination';


const Home = () => {
  return (
    <>
      <HeroSection />
      <div className='-mt-8 relative z-10'>
        <Search/>
      </div>
      <TrendingDestination />
    </>
  );
};

export default Home;
