import BigTopBlock from './BigTopBlock/BigTopBlock';
import s from './BottomBlock.module.scss';
import FirstSmallBlock from './FirstSmallBlock/FirstSmallBlock';
import SecondSmallBlock from './SecondSmallBlock/SecondSmallBlock';

const BottomBlock = (props) => {

    return (
        <section className={s.bottomBlock}>
            <BigTopBlock />
            <div className={s.bottom}>
                <FirstSmallBlock />
                <SecondSmallBlock />
            </div>
        </section>)
}

export default BottomBlock;