import s from './Banner.module.scss';

const Banner = ({ title, text, buttonText, gradient }) => {
    return (
        <div className={`${s.container} ${text ? '' : s.withoutText}`} >

            {gradient ?
                <div className={s.svg1}>

                </div>
                : null}
            {gradient ? <div className={s.svg2}></div> : null}


            <div className={s.text}>
                {title}
                <p>{text}</p>
            </div>
            <div className={s.button}>
                {buttonText}
            </div>



        </div>
    )
}

export default Banner;