import { NavLink } from 'react-router-dom';
import s from './SocialMediaButton.module.scss';

const SocialMediaButton = ({ icon, link }) => {
    return (
        <NavLink target='_blank' to={link}>
            <div className={s.button}>
                {icon}
            </div>
        </NavLink>
    )
}

export default SocialMediaButton;