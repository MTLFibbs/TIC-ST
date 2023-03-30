import { useReducer, createContext } from "react";
import { useState, useEffect } from "react";


export const LiveGameContext = createContext(null);

export const LiveGameProvider = ({children}) => {
    
    const [assign, setAssign] = useState(false);

    return(
        <LiveGameContext.Provider value = {{assign, setAssign}}>
            {children}
        </LiveGameContext.Provider>
    )
}