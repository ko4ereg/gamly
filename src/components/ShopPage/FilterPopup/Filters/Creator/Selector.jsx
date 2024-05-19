
import { useMemo, useRef } from 'react';
// import s from './../../FilterPopup.module.scss';
import s from './Selector.module.scss';
import Checkbox from '../../../../common/Checkbox';
import TextButtonC1 from '../../../../common/TextButtonC1/TextButtonC1';







const Selector = ({ isChecked, setIsChecked, setShowAll, showAll, filterValue, options }) => {

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().startsWith(filterValue.toLowerCase())
    );

    const handleSelectAll = () => {
        setIsChecked(options.map(option => option.value));
    }

    const handleCheckboxChange = (value) => {

        if (isChecked.includes(value)) {
            const newOptions = isChecked.filter((item) => item !== value);
            setIsChecked(newOptions);

        } else {
            const newOptions = [...isChecked, value];
            setIsChecked(newOptions);

        }
    }


    // const listRef = useRef(null);


    // const handleTouchStart = (e) => {
    //     const touchStartY = e.touches[0].clientY;
    //     const scrollTop = listRef.current.scrollTop;

    //     const onTouchMove = (e) => {
    //         const touchMoveY = e.touches[0].clientY;
    //         const touchDistance = touchStartY - touchMoveY;

    //         listRef.current.scrollTop = scrollTop + touchDistance;
    //     };

    //     const onTouchEnd = () => {
    //         document.removeEventListener('touchmove', onTouchMove);
    //         document.removeEventListener('touchend', onTouchEnd);
    //     };

    //     document.addEventListener('touchmove', onTouchMove);
    //     document.addEventListener('touchend', onTouchEnd);
    // };


    const selectorElement = useMemo(() => {
        const displayedOptions = showAll ? (filterValue ? filteredOptions : options) : options.slice(0, 5);
        const sortedOptions = displayedOptions.sort((a, b) => a.label.localeCompare(b.label));
        if (sortedOptions.length === 0) return 'Ничего не найдено';
        return sortedOptions.map((creator, index) => (
            <li value={creator.value} key={index}>
                <Checkbox
                    isChecked={isChecked.includes(creator.value)}
                    setIsChecked={() => handleCheckboxChange(creator.value)}
                    value={creator.value}
                >
                    {creator.label}
                </Checkbox>
            </li>
        ));
    }, [filteredOptions, isChecked, showAll]);




    return (

        <div className={`${s.selector} ${showAll ? s.shownSelector : ''}`}>
            {/* {showAll ?
                <TextButtonC1 text={'Выбрать все'} onClick={handleSelectAll} />
                : null} */}
            <ul
            // onTouchStart={handleTouchStart} 
            // ref={listRef}
            >
                {selectorElement}
            </ul>
            {options.length > 5 ? (showAll ? <TextButtonC1 text={'Скрыть все'} onClick={() => setShowAll(!showAll)} />
                :
                <TextButtonC1 text={'Посмотреть все'} onClick={() => setShowAll(!showAll)} />)
                : null}

        </div>

    )
}

export default Selector;