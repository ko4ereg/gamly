import { useEffect, useState } from 'react';
import s from './ReplenishmentPopup.module.scss';
import close from './../../../assets/icons/close.svg';
import ButtonPrimary from '../../common/Buttons/ButtonPrimary/ButtonPrimary';
import CloseButton from '../../common/Buttons/CloseButton/CloseButton';
import GamlyCoin from '../../common/GamlyCoin/GamlyCoin';
import PaymentMethods from '../../common/PaymentMethods/PaymentMethods';
import SuccesPopupContent from './SuccesPopupContent';
import BottomMenu from '../../common/Buttons/BottomMenu/BottomMenu';
import ButtonSuccesPopup from '../../common/Buttons/ButtonSuccesPopup/ButtonSuccesPopup';



const ReplenishmentPopup = ({ popupActive, setPopupActive, login, link, priceWithoutFormat, promo, price }) => {

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




  return (
    <div className={`${s.modal_container} ${popupActive ? s.active : ''} `} onClick={(e) => { handleClick(e) }}>
      {!succes
        ? <div className={s.replenishment_container} >

          <div className={s.heading}>
            <div className={s.heading_title}>
              <h3>Пополнение steam </h3>
            </div>
            <CloseButton icon={close} onClick={() => { setPopupActive(false) }} />
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
                <div className={s.button}> <ButtonPrimary small={true} text={'Войти'} /></div>
              </div>
            </div>
            <div className={s.payments}>
              <h4>Метод оплаты</h4>
              <PaymentMethods />
            </div>

          </div>


          <div className={s.buttons}>

            <ButtonPrimary onClick={() => setSucces(true)} text={'Перейти к оплате'} />


          </div>
        </div>
        :
        <div className={`${s.replenishment_container} ${s.succes_container}`} >
          <div style={{ justifyContent: 'flex-end' }} className={s.heading}>
            <CloseButton icon={close} onClick={() => {
              setPopupActive(false);
              setSucces(false)
            }} />
          </div>
          <SuccesPopupContent coins={Math.floor(priceWithoutFormat * 0.95)} />
          <BottomMenu separator={true}>

            <ButtonSuccesPopup icon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M13.3708 18.072C6.70844 18.072 2.90835 13.5045 2.75 5.9043H6.0873C6.19691 11.4827 8.6572 13.8456 10.606 14.3328V5.9043H13.7485V10.7153C15.6729 10.5083 17.6945 8.31591 18.3766 5.9043H21.5191C20.9953 8.8762 18.803 11.0685 17.244 11.9698C18.803 12.7006 21.3 14.6129 22.25 18.072H18.7908C18.0478 15.7578 16.1966 13.9674 13.7485 13.7237V18.072H13.3708Z" fill="#B2ACBF" />
            </svg>} text={'Поддержка VK'} />
            <ButtonSuccesPopup icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19.0312 5.75813L16.4954 18.9966C16.4954 18.9966 16.1406 19.9145 15.1659 19.4743L9.31511 14.8287L9.28798 14.815C10.0783 14.0802 16.2067 8.37412 16.4746 8.11548C16.8892 7.7149 16.6318 7.47643 16.1504 7.77902L7.09792 13.7322L3.60551 12.5153C3.60551 12.5153 3.0559 12.3129 3.00303 11.8727C2.94946 11.4318 3.6236 11.1933 3.6236 11.1933L17.8611 5.40942C17.8611 5.40942 19.0312 4.877 19.0312 5.75813Z" fill="#B2ACBF" />
            </svg>} text={'Поддержка Telegram'} />
          </BottomMenu>


        </div>


      }


    </div>
  )
}

export default ReplenishmentPopup;