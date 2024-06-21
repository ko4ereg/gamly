import ButtonPrimary from '../../../common/Buttons/ButtonPrimary/ButtonPrimary';
import s from './BigTopBlock.module.scss';

const BigTopBlock = (props) => {

    return (
        <div className={s.container}>
            <div className={s.text}>
                <div className={s.title}>Получайте до +25% кэшбека бонусами на свой аккаунт. </div>
                <div className={s.subtitle}>Оплачивайте ими без ограничения любые товары или конвертируйте в баланс Steam</div>
            </div>
            <div className={s.button}>
                <ButtonPrimary text={'Войти в аккаунт'}/>
            </div>
            <div className={s.image}></div>
        </div>)
}

export default BigTopBlock;