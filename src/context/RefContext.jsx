import React, {useRef} from "react";

export const RefContext = React.createContext();

export default function RefProvider({children}) {
    const contentOneRef = useRef();
    const contentTwoRef = useRef();

    return(
        <RefContext.Provider value={{contentOneRef,contentTwoRef}}>
            {children}
        </RefContext.Provider>
    )
}