// import Header from '@/components/layout/header.layout';
// import Footer from '@/components/layout/footer.layout';
// import Home from './home';
// import SearchPage from './search';
import Router from './router';
import { Toaster } from 'sonner';
import AuthContextProvider from '@/lib/providers/auth-context-provider';
// import HotelDetails from './hotel-details';
// import {SignInPage, SignUpPage} from './auth';

const App = () => {
  return (
    <AuthContextProvider>
        <Router />
        <Toaster position='top-right' richColors/>
    </AuthContextProvider>
  );
}

export default App