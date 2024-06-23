import RedirectButton from '../../../common/Buttons/RedirectButton/RedirectButton';
import SocialMediaButton from '../../../common/Buttons/SocialMediaButton/SocialMediaButton';
import s from './SecondSmallBlock.module.scss';

const SecondSmallBlock = (props) => {

    return (
        <div className={s.container}>
            <div className={s.img}>
            <div className={s.gradient}></div>
            </div>
          
            <div className={s.content}>
                <div className={s.text}>Читайте нас</div>
                <div className={s.buttons}>
                    <RedirectButton small={true} text={'Vk'} />
                    <RedirectButton small={true} text={'Telegram'} />
                    <RedirectButton small={true} text={'Discord'} />
                </div>
            </div>
        </div>)
}

export default SecondSmallBlock;