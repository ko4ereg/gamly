import s from './TextButtonC2.module.scss';

  const TextButtonC2 = ({disabled, text, onClick, hidden}) => {
    return (
        <button className={s.button} onClick={onClick} style={{visibility:  hidden ? 'hidden' : 'visible' }} disabled={disabled}>{text}</button>
    )
}

export default TextButtonC2;