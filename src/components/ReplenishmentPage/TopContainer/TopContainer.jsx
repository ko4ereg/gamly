import SocialMediaButton from '../../common/Buttons/SocialMediaButton/SocialMediaButton';
import s from './TopContainer.module.scss';
import g from './../../../Globalstyles.module.css';
import backskins from './../../../assets/replenishment/backskins.png';
import backbalance from './../../../assets/replenishment/backbalance.png';
import { useEffect } from 'react';
import Tabs from '../../common/Tabs/Tabs';
import BigTab from '../../common/BigTab/BigTab';

const TopContainer = (props) => {

    const imagesPreload = [backskins, backbalance];

    useEffect(() => {
        imagesPreload.forEach((image) => {
            const newImage = new Image();
            newImage.src = image;
            window[image] = newImage;
        });

    }, [])


    return (
        <div className={`${props.selectedType === 'skins' ? s.topImage : s.topImageBalance}`}

            style={{ backgroundImage: `linear-gradient(0deg, rgba(20, 17, 26, 0.80) 0%, rgba(20, 17, 26, 0.80) 100%), url(${props.selectedType === 'skins' ? backskins : backbalance})` }}>

            <div className={g.container}>
                <div className={s.container}>
                    <div className={s.socialmedia}>

                        <SocialMediaButton
                            link={'https://www.google.com'}
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  >
                                <path d="M19.0312 5.75813L16.4954 18.9966C16.4954 18.9966 16.1406 19.9145 15.1659 19.4743L9.31511 14.8287L9.28798 14.815C10.0783 14.0802 16.2067 8.37412 16.4746 8.11548C16.8892 7.7149 16.6318 7.47643 16.1504 7.77902L7.09792 13.7322L3.60551 12.5153C3.60551 12.5153 3.0559 12.3129 3.00303 11.8727C2.94946 11.4318 3.6236 11.1933 3.6236 11.1933L17.8611 5.40942C17.8611 5.40942 19.0312 4.877 19.0312 5.75813Z" fillOpacity="0.4" />
                            </svg>
                            } />
                        <SocialMediaButton
                            link={'https://www.google.com'}
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  >
                                <path d="M12.8708 19.072C6.20844 19.072 2.40835 14.5045 2.25 6.9043H5.5873C5.69691 12.4827 8.1572 14.8456 10.106 15.3328V6.9043H13.2485V11.7153C15.1729 11.5083 17.1945 9.31591 17.8766 6.9043H21.0191C20.4953 9.8762 18.303 12.0685 16.744 12.9698C18.303 13.7006 20.8 15.6129 21.75 19.072H18.2908C17.5478 16.7578 15.6966 14.9674 13.2485 14.7237V19.072H12.8708Z" fillOpacity="0.4" />
                            </svg>
                            } />
                    </div>
                    <div className={s.type}>
                        <Tabs>
                            <BigTab setSelectedType={props.setSelectedType} selected={props.selectedType} type={'skins'} text={'Скинами'} />
                            <BigTab setSelectedType={props.setSelectedType} selected={props.selectedType} type={'balance'} text={'На баланс'} />
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContainer;