// import { useRef, useState } from 'react';
// import s from './Tooltip.module.scss';
// import { FloatingArrow, arrow, useFloating } from '@floating-ui/react';
// import HelpButton from '../HelpButton/HelpButton';

// const Tooltip = ({ text, showTooltip }) => {

//     const arrowRef = useRef(null);
//     const { refs, floatingStyles, context } = useFloating({
//         middleware: [
//             arrow({
//                 element: arrowRef,
//             }),
//         ],
//     });

//     // const [showTooltip, setShowTooltip] = useState(false);

//     // const handleMouseEnter = () => {
//     //     setShowTooltip(true);
//     // }
//     // const handleMouseLeave = () => {
//     //     setShowTooltip(false);
//     //     console.log('leave');
//     // }
//     return (

//         <>
//             <div className={s.tooltipContainer} ref={refs.setReference}/>
//             <HelpButton />

//             {showTooltip && <div  ref={refs.setFloating}  style={floatingStyles} className={s.tooltip}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus quos at omnis aspernatur explicabo id voluptatibus, tempora ea beatae non corporis ipsum adipisci et vel ullam reprehenderit optio sint.
//                <div> <FloatingArrow ref={arrowRef} fill='#211F29' tipRadius={8} staticOffset={'50%'} context={context} d='M11 6C11 0 21.25 0 21.25 0H0.75C0.75 0 11 0 11 6Z' height={6} width={20.5} /></div>
//             </div>}
//         </>
//         //     <div className={s.tooltip}>
//         //         {text}
//         //         <div className={s.rectangle}>
//         //         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="6" viewBox="0 0 22 6" fill="none">
//         // <path d="M11 6C11 0 21.25 0 21.25 0H0.75C0.75 0 11 0 11 6Z" fill="#211F29"/>
//         // </svg>
//         //         </div>
//         //     </div>


//     )
// }

// export default Tooltip;

import { useRef, useState } from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    FloatingPortal,
    FloatingArrow,
    arrow,
    size,
    limitShift
} from "@floating-ui/react";

import s from './Tooltip.module.scss';
import HelpButton from "../HelpButton/HelpButton";

const Tooltip = ({ tooltipText, small }) => {

    const arrowRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "top-left",
        // Make sure the tooltip stays on the screen
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(
                {
                    mainAxis: 7,
                }
            ),
            flip(),
            shift(),
            arrow({
                element: arrowRef,
            }),

        ]
    });

    // Event listeners to change the open state
    const hover = useHover(context, { move: false });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    // Role props for screen readers
    const role = useRole(context, { role: "tooltip" });

    // Merge all the interactions into prop getters
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role
    ]);


    return (
        <>
            <div ref={refs.setReference} {...getReferenceProps()}>
                <HelpButton small={small} />
            </div>

            <FloatingPortal>
                {isOpen && (
                    <div
                        className={s.tooltip}
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}

                    >
                        {tooltipText}
                        <FloatingArrow
                            style={{ transform: 'rotate(180deg)' }}
                            ref={arrowRef}
                            context={context}
                            width={20.5}
                            height={6}
                            fill="#211F29"
                            d="M10.5 6C10.5 0 20.75 0 20.75 0H0.25C0.25 0 10.5 0 10.5 6Z"

                        />
                    </div>
                )}
            </FloatingPortal>
        </>
    );
}

export default Tooltip;


