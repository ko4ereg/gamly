import s from './SearchResults.module.scss';

const SearchResults = ({ children }) => {

    return (
        <ul className={s.ul}>
            <div className={s.tail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="6" viewBox="0 0 21 6" fill="none">
                    <path d="M10.25 0C10.25 6 20.5 6 20.5 6H0C0 6 10.25 6 10.25 0Z" fill="#211F29" />
                </svg>

            </div>
            {children}
        </ul>
    )
}

export default SearchResults;