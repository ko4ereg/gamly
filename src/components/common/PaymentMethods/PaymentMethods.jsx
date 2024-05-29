import { useState } from "react";
import PaymentMethod from "./PaymentMethod"
import s from './PaymentMethod.module.scss';
const PaymentMethods = () => {


    const [selectedType, setSelectedType] = useState('');


    const handleClick = (type) => {
        setSelectedType(type);
        console.log(type);
       
    }


    const handleCheckboxChange = (type) => {
        setSelectedType(type);
        // props.setSort(e.target.id === 'popular' ? 'сначала популярные' : e.target.id === 'cheap' ? 'сначала дешевые' : e.target.id === 'exp' ? 'сначала дорогие' : 'по скидке (%)');
        // props.setSortsOpen(false);
    };


    return (
        <div className={s.paymentsContainer}>
            <PaymentMethod
                logo={<svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="sbp-1669939801-logotic-brand 1" clip-path="url(#clip0_1617_14900)">
                        <path id="Vector" d="M0.625 6.59521L4.01579 12.656V16.353L0.628967 22.4019L0.625 6.59521Z" fill="#5B57A2" />
                        <path id="Vector_2" d="M13.6484 10.4495L16.8258 8.50214L23.3283 8.49609L13.6484 14.426V10.4495Z" fill="#D90751" />
                        <path id="Vector_3" d="M13.6269 6.55898L13.6448 14.5833L10.2461 12.495V0.5L13.6269 6.55898Z" fill="#FAB718" />
                        <path id="Vector_4" d="M23.3246 8.49658L16.8219 8.50262L13.6269 6.55898L10.2461 0.5L23.3246 8.49658Z" fill="#ED6F26" />
                        <path id="Vector_5" d="M13.6448 22.4355V18.5423L10.2461 16.4937L10.2479 28.5005L13.6448 22.4355Z" fill="#63B22F" />
                        <path id="Vector_6" d="M16.8136 20.5058L4.01556 12.656L0.625 6.59521L23.3103 20.4979L16.8136 20.5058Z" fill="#1487C9" />
                        <path id="Vector_7" d="M10.2461 28.5002L13.6425 22.4352L16.8119 20.5055L23.3085 20.4976L10.2461 28.5002Z" fill="#017F36" />
                        <path id="Vector_8" d="M0.632812 22.4013L10.2772 16.4933L7.03478 14.5039L4.01964 16.3524L0.632812 22.4013Z" fill="#984995" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1617_14900">
                            <rect width="22.75" height="28" fill="white" transform="translate(0.625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                }
                title={'СБП / QR'}
                subtitle={"Без комиссии"}
                selectedType={selectedType}
                // onClick={handleClick}
                onChange={handleCheckboxChange}
                type={'sbp'} />
            <PaymentMethod
                logo={<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.7144H18.7397C18.7397 10.9269 18.0296 9.21262 16.7657 7.94864C15.5017 6.68474 13.7874 5.97467 12 5.97467C10.2126 5.97467 8.49826 6.68474 7.2343 7.94864C5.97035 9.21262 5.26028 10.9269 5.26028 12.7144H0C0 9.53179 1.26428 6.47949 3.51472 4.22907C5.76515 1.97865 8.81743 0.714355 12 0.714355C15.1826 0.714355 18.2349 1.97865 20.4853 4.22907C22.7357 6.47949 24 9.53179 24 12.7144Z" fill="#B8F803" />
                </svg>
                }
                title={'Плайт / Оплата частями'}
                subtitle={"Оплата частями без переплат"}
                selectedType={selectedType}
                  // onClick={handleClick}
                  onChange={handleCheckboxChange}
                type={'plait'} />
            <PaymentMethod
                logo={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M4 4.75C2.48122 4.75 1.25 5.98122 1.25 7.5V17.5C1.25 19.0188 2.48122 20.25 4 20.25H20C21.5188 20.25 22.75 19.0188 22.75 17.5V10.25H6C5.58579 10.25 5.25 9.91421 5.25 9.5C5.25 9.08579 5.58579 8.75 6 8.75H22.75V7.5C22.75 5.98122 21.5188 4.75 20 4.75H4Z" fill="#F9F8FC" />
                    </g>
                </svg>
                }
                title={'С банковской карты'}
                subtitle={"Мир, UnionPay, MasterCard, Visa"}
                selectedType={selectedType}
                // onClick={handleClick}
                onChange={handleCheckboxChange}
                type={'card'} />
            <PaymentMethod
                logo={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M12 1.75C6.06294 1.75 1.25 6.56294 1.25 12.5C1.25 18.4371 6.06294 23.25 12 23.25C17.9371 23.25 22.75 18.4371 22.75 12.5C22.75 6.56294 17.9371 1.75 12 1.75ZM15.75 10C15.75 9.23697 15.5678 8.5837 15.1673 8.06443C14.7698 7.54908 14.2196 7.24662 13.6352 7.06475C13.3606 6.9793 13.0634 6.91656 12.75 6.87066V6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V6.75782C10.7764 6.74612 10.291 6.74929 9.81006 6.75243L9.59566 6.75379C8.85407 6.75813 8.25003 7.35975 8.25003 8.10591L8.25 12.5V16.8941C8.25 17.6403 8.85404 18.2419 9.59559 18.2462L9.81003 18.2476C10.2909 18.2507 10.7764 18.2539 11.25 18.2422V19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19V18.1293C13.0634 18.0834 13.3606 18.0207 13.6352 17.9353C14.2196 17.7534 14.7698 17.4509 15.1673 16.9356C15.5677 16.4163 15.75 15.763 15.75 15C15.75 14.1694 15.5186 13.4776 15.0407 12.949C14.8822 12.7736 14.7049 12.6255 14.5145 12.5C14.7049 12.3745 14.8822 12.2264 15.0407 12.051C15.5186 11.5224 15.75 10.8306 15.75 10ZM12.9426 11.5513C12.393 11.6891 11.7378 11.7357 11.0012 11.7496C10.5848 11.7414 10.1634 11.7435 9.75001 11.7463L9.75003 8.25291C11.2172 8.24444 12.3752 8.2436 13.1895 8.497C13.5843 8.61985 13.8279 8.78395 13.9795 8.98048C14.128 9.17309 14.25 9.47702 14.25 10C14.25 10.5412 14.1064 10.8478 13.928 11.0451C13.7364 11.2571 13.4256 11.4303 12.9426 11.5513ZM11.0012 13.2504C10.5848 13.2586 10.1634 13.2565 9.75 13.2537V16.7471C11.2172 16.7556 12.3752 16.7564 13.1895 16.503C13.5842 16.3802 13.8279 16.2161 13.9795 16.0195C14.128 15.8269 14.25 15.523 14.25 15C14.25 14.4588 14.1064 14.1522 13.928 13.9549C13.7364 13.7429 13.4256 13.5697 12.9426 13.4487C12.393 13.3109 11.7378 13.2643 11.0012 13.2504Z" fill="#F9F8FC" />
                    </g>
                </svg>
                }
                title={'Криптовалюта'}
                subtitle={"USDT (trc20, erc20), Bitcoin, Etherium, Tron, Litecoin, XRP"}
                selectedType={selectedType}
                    // onClick={handleClick}
                    onChange={handleCheckboxChange}
                type={'crypto'} />
        </div>

    )
}

export default PaymentMethods;