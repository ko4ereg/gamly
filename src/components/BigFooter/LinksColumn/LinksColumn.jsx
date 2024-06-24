import { NavLink } from 'react-router-dom';
import s from './LinksColumn.module.scss';
import TextButtonT1 from '../../common/Buttons/TextButtonT/TextButtonT1';
 

const LinksColumn = () => {
    return (
        <div className={s.container}>
<div className={s.logo}>Gamly</div>
<div className={s.links}>
    <div className={s.links_container}>
        <div className={s.heading}>Поддержка</div>
        <div className={s.link_items}>
        <div className={s.link_item}>
            <div className={s.link_title}>E-mail</div>
            <div className={s.link_link}><NavLink target='_blank' to={'mailto:support@gamly.ru'} ><TextButtonT1 text={'support@gamly.ru'}/></NavLink></div>

        </div>
        <div className={s.link_item}>
            <div className={s.link_title}>Telegram</div>
            <div className={s.link_link}><NavLink target='_blank' to={'https://t.me/gamly_help_bot'}><TextButtonT1 text={'@gamly_help_bot'}/></NavLink></div>

        </div>
        <div className={s.link_item}>
            <div className={s.link_title}>Vk</div>
            <div className={s.link_link}><NavLink target='_blank' to={'https://vk.com/gamly'}><TextButtonT1 text={'@gamly'}/></NavLink></div>

        </div>
        </div>
    </div>
    <div className={s.links_container}>
        <div className={s.heading}>Сотрудничество</div>
        <div className={s.link_items}>
        <div className={s.link_item}>
            <div className={s.link_title}>E-mail</div>
            <div className={s.link_link}><NavLink target='_blank' to={'mailto:b2b@gamly.ru'} ><TextButtonT1 text={'b2b@gamly.ru'}/></NavLink></div>

        </div>
        <div className={s.link_item}>
            <div className={s.link_title}>Telegram</div>
            <div className={s.link_link}><NavLink target='_blank' to={'https://t.me/gamly_b2b'}><TextButtonT1 text={'@gamly_b2b'}/></NavLink></div>

        </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default LinksColumn;