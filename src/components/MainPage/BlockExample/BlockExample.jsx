import s from './BlockExample.module.css';
import clock from './../../../assets/icons/clock.svg';
import currency from './../../../assets/icons/currency.svg';
import rightarrow from './../../../assets/icons/rightarrow.svg';
import toolbar from './../../../assets/toolbar.png';
import example from './../../../assets/example.png';

const BlockExample = (props) => {


    return (
        <section className={s.blockExample}>
            <div className={s.info}>
                <div className={s.info_block}><img src={clock} alt="clock" /> Моментальное получение</div>
                <div className={s.info_block}><img src={currency} alt="$" /> Без комиссий</div>
            </div>
            <div className={s.title}> <h1>Пополняй баланс Steam <span>в плюс!</span></h1></div>
            <div className={s.button_block}>
                <div className={s.button}><p>Пополнить Steam</p><img src={rightarrow} alt="->" /></div>
                <div className={s.signs}>
                    <p>Цифровые подписки</p>
                </div>
            </div>
            <div className={s.example} ><img src={example} alt="screenshot" /></div>
        </section>)
}

export default BlockExample;