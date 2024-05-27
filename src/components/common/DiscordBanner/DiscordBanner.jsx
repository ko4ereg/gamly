 import s from './DiscordBanner.module.scss';

const DiscordBanner = () => {
    return (
        <div className={s.container} >

            <svg className={s.svg1} xmlns="http://www.w3.org/2000/svg" width="143" height="158" viewBox="0 0 143 158" fill="none">
                <g opacity="0.1" filter="url(#filter0_f_1700_11842)">
                    <path d="M44.2408 13.7368C54.2659 -3.8331 60.6225 -21.4081 62.2274 -35.9937C63.8324 -50.5793 60.5864 -61.273 53.0427 -66.2527C45.4989 -71.2324 34.124 -70.19 20.8562 -63.3032C7.58842 -56.4163 -6.75141 -44.1111 -19.7199 -28.4842C-32.6884 -12.8572 -43.4833 5.12451 -50.2651 22.3972C-57.0469 39.6699 -59.396 55.1648 -56.9123 66.2419C-54.4286 77.3189 -47.2657 83.2927 -36.644 83.1453C-26.0223 82.9979 -12.5991 76.7385 1.33851 65.4336L2.37584 6.89715L44.2408 13.7368Z" fill="#D4EE5D" />
                </g>
                <defs>
                    <filter id="filter0_f_1700_11842" x="-137.877" y="-149.354" width="280.506" height="312.502" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1700_11842" />
                    </filter>
                </defs>
            </svg>
            <div className={s.svg2}></div>

            <div className={s.text}>
                <h3>Присоединяйся к нам в Discord</h3>
                <p>и узнавай первым о новых акциях Gamly</p>
            </div>
            <div className={s.button}>
                Перейти
            </div>



        </div>
    )
}

export default DiscordBanner;