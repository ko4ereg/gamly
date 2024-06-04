import s from './RubyCoin.module.scss';

const RubyCoin = ({ size }) => {
    return (
        <div className={s.coin}>
         <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox={`0 0 ${size} ${size}`} fill="none">
  <path d="M122.037 203.488L2.37997 59.7117L58.9841 80.2512L122.037 203.488Z" fill="#F23E59"/>
  <path d="M122.037 203.488L240.261 59.7117L183.656 79.6288L122.037 203.488Z" fill="#CC1732"/>
  <path d="M122.037 203.488L183.656 79.6288L58.2675 79.6288L122.037 203.488Z" fill="#E7213F"/>
  <path d="M183.656 80.2511L122.037 16.7661L203.719 11.1646L183.656 80.2511Z" fill="#E7334F"/>
  <path d="M58.2675 79.6292L39.6384 9.29684L122.037 16.7655L58.2675 79.6292Z" fill="#FC4C67"/>
  <path d="M122.037 16.7657L39.6384 9.29671L86.4182 3.49825L150.187 3.49825L203.719 11.1638L122.037 16.7657Z" fill="#FF647B"/>
  <path d="M203.719 11.1638L239.473 61.077L183.656 79.6287L203.719 11.1638Z" fill="#D8233E"/>
  <path d="M39.6384 9.29675L58.9841 80.2514L2.37995 59.7119L39.6384 9.29675Z" fill="#FF6078"/>
  <path d="M122.037 16.7655L183.656 79.6288H58.2675L122.037 16.7655Z" fill="#F43754"/>
</svg>
        </div>
    )
}

export default RubyCoin;