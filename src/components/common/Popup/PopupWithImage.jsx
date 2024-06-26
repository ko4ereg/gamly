import { useEffect} from 'react';
import s from './PopupWithImage.module.scss';
import CloseButton from '../Buttons/CloseButton/CloseButton';



const PopupWithImage = ({ popupActive, setPopupActive, children, heading, note, image, back }) => {
    console.log(image);
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
            <div className={s.popup_container} >
                <div className={`${s.top_container} ${back === 'succes' ? s.succes : back === 'failure' ? s.fail : s.login}`}
                    style={{ backgroundImage: ` url(${image})` }}
                >
                    <div className={s.gradient}></div>
                    <CloseButton icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                            <path id="Vector" d="M4.50391 11.495L7.99899 7.99998M7.99899 7.99998L11.4941 4.50488M7.99899 7.99998L4.50391 4.50488M7.99899 7.99998L11.4941 11.495" stroke="#B2ACBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                    } onClick={() => { setPopupActive(false) }} />
                    <div className={s.heading}>
                        {heading}
                        {note && <div className={s.note}>
                            {note}
                        </div>}

                    </div>
                </div>
                <div className={s.bottom_container}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PopupWithImage;