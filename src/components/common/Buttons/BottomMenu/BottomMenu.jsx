import s from './BottomMenu.module.scss';

const BottomMenu = ({separator, switcher, children}) => {
    return (
<div className={s.container}>
{separator && <div className={s.separator}></div>}
 
<div className={s.buttons}>
   {children}
</div>
</div>
    )
}

export default BottomMenu;