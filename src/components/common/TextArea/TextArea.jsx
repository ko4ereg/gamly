import ReactTextareaAutosize from 'react-textarea-autosize';
import s from './TextArea.module.scss';

const TextArea = ({ heading, value, setValue, placeholder, onChange  }) => {



    const handleChangeTextInput = (e) => {
        setValue(e.target.value);
    }


    return (
        <div className={s.container}>

            <div className={s.title}>
                <div className={s.heading}>
                    {heading}
                </div>
            </div>
            <div className={s.wrapper}>
                <ReactTextareaAutosize
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={s.input}
                    maxRows={3}
                    maxLength={300} 
                />
            </div>

        </div>
    )
}

export default TextArea;