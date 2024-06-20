import ButtonSecondary from '../../../common/Buttons/ButtonSecondary/ButtonSecondary';
import s from './HeadingFeatures.module.scss';
import razorIcon from './../../../../assets/icons/mainpage/razoricon.png'; 
import cartIcon from './../../../../assets/icons/mainpage/cardicon.png'; 
import starIcon from './../../../../assets/icons/mainpage/staricon.png'; 

const HeadingFeatures = (props) => {

    return (
        <section className={s.container}>
            <div className={s.cards}>
                <div className={s.card}>
                    <div className={s.icon} style={{backgroundImage: `url(${razorIcon})`}}></div>
                    <div className={s.cardInfo}>
                    <div className={s.text}>
                        <div className={s.card_title}>Пополняйте Steam</div>
                        <div className={s.card_subtitle}>На счет или скинами? Как вам удобно. До 20% выгоды и нулевая комиссия</div>
                    </div>
                    <div className={s.button}>
                        <ButtonSecondary medium={true} text={'Перейти'}/>
                    </div>
                    </div>
                </div>
<div className={s.line}></div>
                <div className={s.card}>
                    <div className={s.icon} style={{backgroundImage: `url(${cartIcon})`}}></div>
                    <div className={s.cardInfo}>
                    <div className={s.text}>
                        <div className={s.card_title}>Покупайте периферию, гифты и подписки</div>
                        <div className={s.card_subtitle}>Продаем напрямую с поставщиков, гарантируя лучшую цену для вас. Мы имеем большой ассортимент и сможем вам помочь </div>
                    </div>
                    <div className={s.button}>
                        <ButtonSecondary medium={true} text={'Перейти'}/>
                    </div>
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.card}>
                    <div className={s.icon} style={{backgroundImage: `url(${starIcon})`}}></div>
                    <div className={s.cardInfo}>
                    <div className={s.text}>
                        <div className={s.card_title}>Обменивайте, продавайте и покупайте внутриигровые предметы</div>
                        <div className={s.card_subtitle}>Поменяйте скины которые надоели на новые</div>
                    </div>
                    <div className={s.button}>
                        <ButtonSecondary medium={true} text={'Перейти'}/>
                    </div>
                    </div>
                </div>
            </div>
          
        </section>)
}

export default HeadingFeatures;