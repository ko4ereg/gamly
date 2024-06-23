import ButtonSecondary from '../../../common/Buttons/ButtonSecondary/ButtonSecondary';
import s from './FirstSmallBlock.module.scss';

const FirstSmallBlock = (props) => {

    return (
        <div className={s.container}>
          <div className={s.img}>  <div className={s.gradient}></div></div>
          <div className={s.text}>300+ геймеров уже воспользовались нашими сервисами</div>
        </div>)
}

export default FirstSmallBlock;