import { useEffect, useState } from 'react';
import s from './Commision.module.scss';

const Commision = ({ sum }) => {
  

    return (
        <div className={s.container}>
            <div className={s.heading}>
                Комиссия
            </div>
            <div className={s.lineContainer}>
                <div className={`${s.line_item} ${parseInt(sum) >= 100 && s.reached}`}>
                    <div className={s.percent}>16%</div>
                    <div className={s.sum}>100 ₽</div>
                </div>
                <div className={`${s.line} ${parseInt(sum) >= 100 && s.line_reached}`}></div>
                <div className={`${s.line_item} ${parseInt(sum) >= 1000 && s.reached}`}>
                    <div className={s.percent}>14%</div>
                    <div className={s.sum}>1000 ₽</div>
                </div>
                <div className={`${s.line} ${parseInt(sum) >= 1000 && s.line_reached}`}></div>
                <div className={`${s.line_item} ${parseInt(sum) >= 2000 && s.reached}`}>
                    <div className={s.percent}>12%</div>
                    <div className={s.sum}>2000 ₽</div>
                </div>
                <div className={`${s.line} ${parseInt(sum) >= 2000 && s.line_reached}`}></div>
                <div className={`${s.line_item} ${parseInt(sum) >= 6000 && s.reached}`}>
                    <div className={s.percent}>8%</div>
                    <div className={s.sum}>6000 ₽</div>
                </div>
                <div className={`${s.line} ${parseInt(sum) >= 6000 && s.line_reached}`}></div>
            </div>
        </div>
    )
}

export default Commision;