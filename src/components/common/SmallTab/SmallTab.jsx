import s from './SmallTab.module.scss';

const SmallTab = ({ text, selected, type, setSelectedType }) => {
    return (
        <div onClick={() => setSelectedType(type)} className={`${s.tab} ${selected === type && s.selected}`}>
            {text}
            <div className={s.border}></div>
        </div>
    )
}

export default SmallTab;