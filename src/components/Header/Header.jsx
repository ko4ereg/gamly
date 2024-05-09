import Logo from '../../assets/Logo.png';
import HeaderNavMenu from './HeaderNavMenu';
import s from './Header.module.css';
import g from '../../Globalstyles.module.css';
import { useEffect, useState } from 'react';
import HeaderNavMenuBurger from './HeaderNavMenuBurger';
const Header = (props) => {


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // return (<header>
  //   <div className={g.container + ' ' + s.container}>
  //     <div><img src={Logo} alt="Logo" /></div>
  //     <HeaderNavMenu />
  //     <div className={s.button}>Войти</div>
  //   </div>
  // </header>)


  return (<header>
     <div className={g.container + ' ' + s.container}>
     <div><img src={Logo} alt="Logo" /></div>
   {isMobile ? <div className={s.adaptive}><div className={s.button}>Войти</div> <HeaderNavMenuBurger/>  </div> : <HeaderNavMenu/> }
   {isMobile ? null :  <div className={s.button}>Войти</div>}
   </div>
  </header>)

  }
  export default Header;