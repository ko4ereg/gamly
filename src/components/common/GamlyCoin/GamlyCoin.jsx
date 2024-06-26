import s from './GamlyCoin.module.scss';

const GamlyCoin = () => {
    return (
        <div className={s.coin}> {
            window.innerWidth >= 1440 ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="16" fill="#343D33" />
                <path d="M19.2234 18.3618H23.6949C23.217 22.253 20.0426 24.8813 15.9807 24.8813C11.4069 24.8813 8.2666 21.8434 8.2666 15.8359C8.2666 9.82846 11.4069 7.2002 16.1173 7.2002C20.4863 7.2002 23.4559 9.69193 23.729 13.6514H19.2575C19.0186 11.9106 17.7557 10.8866 16.0831 10.8866C14.2058 10.8866 12.6698 12.0813 12.6698 15.7335C12.6698 19.3858 14.2058 21.1607 15.9466 21.1607C17.6874 21.1607 19.0527 20.1709 19.2234 18.3618Z" fill="#D4EE5D" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <rect y="0.5" width="24" height="24" rx="12" fill="#343D33" />
                <path d="M14.4178 14.2711H17.7714C17.413 17.1895 15.0322 19.1607 11.9858 19.1607C8.5554 19.1607 6.2002 16.8823 6.2002 12.3767C6.2002 7.8711 8.5554 5.8999 12.0882 5.8999C15.365 5.8999 17.5922 7.7687 17.797 10.7383H14.4434C14.2642 9.4327 13.317 8.6647 12.0626 8.6647C10.6546 8.6647 9.5026 9.5607 9.5026 12.2999C9.5026 15.0391 10.6546 16.3703 11.9602 16.3703C13.2658 16.3703 14.2898 15.6279 14.4178 14.2711Z" fill="#D4EE5D" />
            </svg>
        }
        </div>

    )
}

export default GamlyCoin;