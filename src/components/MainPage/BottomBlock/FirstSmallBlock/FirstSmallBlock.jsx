import ButtonSecondary from '../../../common/Buttons/ButtonSecondary/ButtonSecondary';
import s from './FirstSmallBlock.module.scss';

const FirstSmallBlock = (props) => {

    return (
        <div className={s.container}>
            <div className={s.text}>
                <div className={s.title}>Получайте до +25% кэшбека бонусами на свой аккаунт. </div>
                <div className={s.subtitle}>Оплачивайте ими без ограничения любые товары или конвертируйте в баланс Steam</div>
            </div>
            <div className={s.button}>
                <ButtonSecondary medium={true} text={'Реферальная программа'}/>
            </div>
        </div>)
}

export default FirstSmallBlock;