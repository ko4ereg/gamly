import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import MainPage from './pages/MainPage';
import { Suspense } from 'react';
import ShopPage from './pages/ShopPage';
import SubscribePage from './pages/SubscribePage';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </div>
      {/*         
        <div className='app-wrapper'>
        {pathName !== '/login' && pathName !== '/registrate' && pathName !== '/resetpassword'   ?  <HeaderContainer /> : null}
        <Routes>
               
                
                  <Route path="/login" element={<LoginContainer />} />
                  <Route path="/registrate" element={<RegistrateContainer  />} />
                  <Route path="/resetpassword" element={<ResetPasswordContainer  />} />
              
                </Routes>
          <div className='container'>
          {auth ?  <NavbarContainer className='navbar' /> : null}  
            <div className='app-wrapper-content'>
              <Suspense fallback={<Preloader />}>
                <Routes>
                <Route path="" element={<Navigate to="/blog" />} />
                  <Route path="/profile/:userId?" element={<ProfileContainer />} />
                  <Route path="/blog" element={<BlogContainer />} />
                  <Route path="/masters" element={<MastersContainer />} />
                  <Route path="/search*" element={<SearchContainer />} />
                  <Route element={<Footer />}/>
                </Routes>
              </Suspense>
            </div>
          </div>
          {pathName !== '/login' && pathName !== '/resetpassword' && pathName !== '/registrate' ?  <Footer/> : null}
        </div> */}
    </BrowserRouter>
  );
}

export default App;
