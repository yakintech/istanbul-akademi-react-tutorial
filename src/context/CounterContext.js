import { createContext, useState } from "react";



export const CounterContext = createContext(null)



export const CounterProvider = ({ children }) => {

    const [counter, setcounter] = useState(10)


    const increaseCounter = () => {
        setcounter(counter + 1)
    }

    return <CounterContext.Provider value={{counter, increaseCounter}}>{children}</CounterContext.Provider>

}