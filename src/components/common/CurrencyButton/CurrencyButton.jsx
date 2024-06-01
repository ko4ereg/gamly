import { useState } from 'react';
import s from './CurrencyButton.module.scss';

const CurrencyButton = ({ setSuffix }) => {

    const [value, setValue] = useState('₽ RUB')
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        const value = e.currentTarget.getAttribute('value');
        const suffix = e.currentTarget.getAttribute('suffix');
        setValue(value);
        setOpen(false);
        setSuffix(suffix);
    }

    return (
        <div className={`${s.container} ${open && s.open}`} onClick={() => setOpen(!open)}>
            <div className={s.value}>{value}</div>
            <div className={s.chevron}>
                {open
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 10L8 6L12 10" stroke="#B2ACBF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="#E7E5ED" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>}
            </div>
            {open && value === '₽ RUB' && <div className={s.list}>
                <div suffix='₽' value='₽ RUB' onClick={handleClick} className={s.container + ' ' + s.item}><div className={s.value}>₽ RUB</div><div className={s.chevron}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 10L8 6L12 10" stroke="#B2ACBF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div> </div>
                <div suffix='₺' value='₺ TRY' onClick={handleClick} className={s.container + ' ' + s.item}>₺ TRY</div>
                <div suffix='$' value='$ USD' onClick={handleClick} className={s.container + ' ' + s.item}>$ USD</div>

            </div>}
            {open && value === '₺ TRY' && <div className={s.list}>
                <div suffix='₺' value='₺ TRY' onClick={handleClick} className={s.container + ' ' + s.item}><div className={s.value}>₺ TRY</div><div className={s.chevron}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 10L8 6L12 10" stroke="#B2ACBF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div> </div>
                <div suffix='₽' value='₽ RUB' onClick={handleClick} className={s.container + ' ' + s.item}>₽ RUB</div>
                <div suffix='$' value='$ USD' onClick={handleClick} className={s.container + ' ' + s.item}>$ USD</div>

            </div>}
            {open && value === '$ USD' && <div className={s.list}>
                <div suffix='$' value='$ USD' onClick={handleClick} className={s.container + ' ' + s.item}><div className={s.value}>$ USD</div><div className={s.chevron}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 10L8 6L12 10" stroke="#B2ACBF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div> </div>
                <div suffix='₺' value='₺ TRY' onClick={handleClick} className={s.container + ' ' + s.item}>₺ TRY</div>
                <div suffix='₽' value='₽ RUB' onClick={handleClick} className={s.container + ' ' + s.item}>₽ RUB</div>

            </div>}
        </div>
    )
    
}

export default CurrencyButton;