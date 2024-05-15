import React, { useState } from "react";

const useFlip = () => {
    const [state, setState] = useState(true);
    const toggle = () => {
        setState(oldstate => !oldstate);
    }

    return [state, toggle];
}

export default useFlip;