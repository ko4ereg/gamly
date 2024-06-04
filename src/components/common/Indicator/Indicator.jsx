import s from './Indicator.module.scss';

const Indicator = ({ succes, small }) => {
    return (
        <div className={`${s.indicator} ${succes ? s.succes : s.error} ${small && s.small}`}>
            {succes
                ?
                (small ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                    <path d="M2.5 6.99988L4.5 8.99988L9.5 3.99988" stroke="#6CEE5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M3.33333 9.1665L5.99999 11.8332L12.6667 5.1665" stroke="#6CEE5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>)
                :
                (small ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3L3 9" stroke="#EE5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 3L9 9" stroke="#EE5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> 
                : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12" stroke="#EE5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 4L12 12" stroke="#EE5D5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>)

            }
        </div>
    )
}

export default Indicator;