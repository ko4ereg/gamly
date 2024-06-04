import s from './TextButtonC1.module.scss';

const TextButtonC1 = ({ disabled, text, onClick }) => {



  return (
    <button className={s.button} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default TextButtonC1;