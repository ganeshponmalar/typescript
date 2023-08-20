
import { createContext } from "react"
import { theme } from "./theme"


 type ThemeContextProviderProps = {  //expecting the type which we provide

    children: React.ReactNode
 }


 export const ThemeContext = createContext(theme)  //here creating the context
                                                //helping to transfer the data to various components

 export const ThemeContextProvider = ({   //destructuring

    children,

   }: ThemeContextProviderProps) => {


    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

