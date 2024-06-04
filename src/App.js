import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import MainPage from './pages/MainPage';
import { Suspense, useEffect } from 'react';
import ShopPage from './pages/ShopPage';
import SubscribePage from './pages/SubscribePage';
import ProductPage from './pages/ProductPage';
import ReplenishmentPage from './pages/ReplenishmentPage';
import CartPage from './pages/CartPage';
import MiniFooter from './components/MiniFooter/MiniFooter';

function App() {

  if(navigator.userAgent.indexOf('iPhone') > -1 )
    {
        document
          .querySelector("[name=viewport]")
          .setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1");
    }

  document.addEventListener('gesturestart', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
  }, {passive:false});
  
  const preventZoom = (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }

  useEffect(() => {
    document.addEventListener('touchstart', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('touchstart', preventZoom);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='content-wrapper'>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/shop/:productId?" element={<ProductPage />} />
          <Route path='/replenishment' element={<ReplenishmentPage/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
        </div>
        <MiniFooter/>
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
