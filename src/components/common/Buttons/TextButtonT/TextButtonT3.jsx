import s from './TextButtonT3.module.scss';

const TextButtonT3 = ({ disabled, text, onClick }) => {



  return (
    <button className={`${s.button}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default TextButtonT3;