import { useRef } from 'react';
import s from './Paragraph.module.scss';
import { useScroll } from 'framer-motion';
import Word from './Word';

const Paragraph = (props) => {

    const container = useRef(null);
    const text = 'Мы хотели чтобы геймеры в России могли покупать игры, все для компьютера, пополнять Steam и т.д. внутри одной экосистемы, и кажется... у нас это получилось';

    const words = text.split(" ");
    const totalChars = text.length;

    const { scrollYProgress } = useScroll({

        target: container,

        offset: ["start 20%", "end 100%"]
        // offset: ["start center", "end end"]

    })



    return (

        < section
            ref={container}
            className={s.textBlock}
        >
            <p>
                {

                    words.map((word, i) => {

                        const start = i / words.length
                        const end = start + (1 / words.length)
                        return <Word totalChars={totalChars} key={i} index={i} progress={scrollYProgress} range={[start, end]}>{word + '\u00A0'}</Word>

                    })

                }

            </p>
        </section>

    )

}
export default Paragraph;

