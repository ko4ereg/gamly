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


