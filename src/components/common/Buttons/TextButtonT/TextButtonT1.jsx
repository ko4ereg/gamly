import s from './TextButtonT1.module.scss';

const TextButtonT1 = ({ disabled, text, onClick }) => {



  return (
    <button className={s.button} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default TextButtonT1;