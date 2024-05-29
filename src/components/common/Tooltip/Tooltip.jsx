import s from './Tooltip.module.scss';

const Tooltip = ({text}) => {
return (
    <div className={s.tooltip}>
        {text}
        <div className={s.rectangle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6" fill="none">
<path d="M11 6C11 0 21.25 0 21.25 0H0.75C0.75 0 11 0 11 6Z" fill="#211F29"/>
</svg>
        </div>
    </div>
)
}

export default Tooltip;