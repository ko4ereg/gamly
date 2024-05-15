import s from './TextButtonC2.module.scss';

<<<<<<< HEAD
  const TextButtonC2 = ({disabled, text, onClick, hidden}) => {


=======
  const TextButtonC2 = ({disabled, text, onClick}) => {
>>>>>>> parent of 57ec11e (1651)
    return (
        <button className={s.button} onClick={onClick} disabled={disabled}>{text}</button>
    )
}

export default TextButtonC2;