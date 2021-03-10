import {useRef} from "react";

import './Hover.scss';
import {useHover} from "../../hooks/useHover";

export const Hover = () => {
    const ref = useRef();

    const isHovering = useHover(ref);

    return (
        <div ref={ref} className={"hover " + (isHovering ? "red" : "blue")}></div>
    );
};

export default Hover;
