import s from './TextButtonC2.module.scss';

  const TextButtonC2 = ({disabled, text, onClick}) => {
    return (
        <button className={s.button} onClick={onClick} disabled={disabled}>{text}</button>
    )
}

export default TextButtonC2;