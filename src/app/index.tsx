import Header from '@/components/layout/header.layout';
// import Home from './home';
import Footer from '@/components/layout/footer.layout';
import HotelDetails from './hotel-details';

const App = () => {
  return (
    <div>
        <Header/>
        {/* <Home/> */}
        <HotelDetails/>
        <Footer/>
    </div>
  );
}

export default App