import Header from '@/components/layout/header.layout';
import Footer from '@/components/layout/footer.layout';
// import Home from './home';
import SearchPage from './search';
// import HotelDetails from './hotel-details';
// import {SignInPage, SignUpPage} from './auth';

const App = () => {
  return (
    <div>
        <Header/>
        {/* <SignInPage/>  */}
        {/* <SignUpPage/> */}
        {/* <HotelDetails/> */}
        {/* <Home/> */}
        {/* <HotelDetails/> */}
        <SearchPage/>  
        {/* <HotelDetails/> */}
        <Footer/>
    </div>
  );
}

export default App