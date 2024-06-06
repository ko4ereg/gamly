import { useEffect, useState } from 'react';
import s from './ReplenishmentPopup.module.scss';
import close from './../../../assets/icons/close.svg';
import ButtonPrimary from '../../common/Buttons/ButtonPrimary/ButtonPrimary';
import CloseButton from '../../common/Buttons/CloseButton/CloseButton';
import GamlyCoin from '../../common/GamlyCoin/GamlyCoin';
import PaymentMethods from '../../common/PaymentMethods/PaymentMethods';
import BottomMenu from '../../common/Buttons/BottomMenu/BottomMenu';
import ButtonSuccesPopup from '../../common/Buttons/ButtonSuccesPopup/ButtonSuccesPopup';



const ReplenishmentPopup = ({ popupActive, setPopupActive, login, link, priceWithoutFormat, promo, price, setToLogin }) => {

  const [succes, setSucces] = useState(false);

  useEffect(() => {
    if (popupActive) {
      document.body.style.overflow = "hidden";
      // document.body.style.marginRight = '17px';

      if (window.innerWidth > 1024) {
        document.body.style.marginRight = `17px`;
      }

    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = 'auto';
    }
  }, [popupActive])


  const handleClick = (e) => {

    if (e.target.classList.contains(s.active)) {
      setPopupActive(false)
    }
  }


  const [selectedType, setSelectedType] = useState('');

  return (
    <div className={`${s.modal_container} ${popupActive ? s.active : ''} `} onClick={(e) => { handleClick(e) }}>
      <div className={s.replenishment_container} >

        <div className={s.heading}>
          <div className={s.heading_title}>
            <h3>Пополнение steam </h3>
          </div>
          <CloseButton icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
              <path id="Vector" d="M4.50391 11.495L7.99899 7.99998M7.99899 7.99998L11.4941 4.50488M7.99899 7.99998L4.50391 4.50488M7.99899 7.99998L11.4941 11.495" stroke="#B2ACBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
          } onClick={() => { setPopupActive(false) }} />
        </div>
        <div className={s.content_container}>
          <div className={s.infoAndBonuses}>
            <div className={s.info}>
              <div className={s.info_top}>
                <div className={s.price}> <div className={s.truncate}> {price} ₽ на баланс скинами </div></div>
                <div className={s.coins}> {Math.floor(priceWithoutFormat * 0.95)}  <GamlyCoin /></div>
              </div>
              <div className={s.line}></div>
              <div className={s.info_bottom}>
                <div className={s.text_info}>
                  <h3>Ссылка на обмен:</h3>
                  <div className={s.text}><div className={s.truncate}>{link}</div></div>
                </div>
                <div className={s.text_info}>
                  <h3>Применен промокод:</h3>
                  <div className={s.text_container}>
                    <div className={s.promo}>{promo}</div>
                    {promo && <span>+10% к пополнению</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className={s.bonuses_block}>
              <div className={s.bonuses}>
                <h3>Начислим за товары:</h3>
                <div className={s.bonuses_amount}>64
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 2">
                      <path id="Polygon 2" d="M10.1699 17.4573L0.198524 5.47597L4.91553 7.1876L10.1699 17.4573Z" fill="#F23E59" />
                      <path id="Polygon 3" d="M10.1699 17.4573L20.0219 5.47597L15.3049 7.13573L10.1699 17.4573Z" fill="#CC1732" />
                      <path id="Polygon 4" d="M10.1696 17.4573L15.3045 7.13573L4.85547 7.13573L10.1696 17.4573Z" fill="#E7213F" />
                      <path id="Polygon 7" d="M15.3048 7.18763L10.1699 1.89721L16.9767 1.43042L15.3048 7.18763Z" fill="#E7334F" />
                      <path id="Polygon 9" d="M4.85653 7.13576L3.3041 1.27473L10.1706 1.89712L4.85653 7.13576Z" fill="#FC4C67" />
                      <path id="Polygon 11" d="M10.1691 1.89717L3.30262 1.27476L7.20093 0.791551L12.515 0.791551L16.976 1.43035L10.1691 1.89717Z" fill="#FF647B" />
                      <path id="Polygon 8" d="M16.9761 1.43031L19.9556 5.58974L15.3042 7.13572L16.9761 1.43031Z" fill="#D8233E" />
                      <path id="Polygon 10" d="M3.30301 1.27474L4.91515 7.18762L0.198141 5.476L3.30301 1.27474Z" fill="#FF6078" />
                      <path id="Polygon 6" d="M10.1696 1.89716L15.3045 7.13576H4.85547L10.1696 1.89716Z" fill="#F43754" />
                    </g>
                  </svg>

                </div>
              </div>
              <div className={s.button}> <ButtonPrimary onClick={() => setToLogin(true)} small={true} text={'Войти'} /></div>
            </div>
          </div>
          <div className={s.payments}>
            <h4>Метод оплаты</h4>
            <PaymentMethods
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          </div>

        </div>


        <div className={s.buttons}>

          <ButtonPrimary disabled={!selectedType} onClick={() => setSucces(true)} text={'Перейти к оплате'} />


        </div>
      </div>



    </div>
  )
}

export default ReplenishmentPopup;