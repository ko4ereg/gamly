import Char from "./Char";
import s from './Paragraph.module.scss';

const Word = ({ children, progress, range, totalChars, index }) => {
    console.log(index);
    const amount = range[1] - range[0]

    const step = amount / children.length
    // const step = (range[1] - range[0]) / children.length;

    return (
        <span className={s.word}>
            {
                children.split("").map((char, i) => {

                    const start = range[0] + (i * step);
                    const end = range[0] + ((i + 1) * step)

                    return <Char key={`c_${i}`} index={i} progress={progress} totalChars={totalChars}
                        range={[start, end]}
                    >{char}</Char>
                })
            }
        </span>
    )
}

export default Word;