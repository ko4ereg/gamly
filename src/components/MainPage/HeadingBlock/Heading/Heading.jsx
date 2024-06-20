import s from './Heading.module.scss';

const Heading = (props) => {

    return (
        <div className={s.heading}>
            <div className={s.bullets}>
                <div className={s.bullet}>
                    Бонусная система для каждого
                </div>
                <div className={s.bullet}>
                    Удобно, потому что любим
                </div>
            </div>
            <div className={s.title}>
                Магазин для геймеров <span>нового поколения</span>
            </div>
        </div>)
}

export default Heading;