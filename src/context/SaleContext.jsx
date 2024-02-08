import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const SaleContext = createContext();

export const useSale = () => {
    const context = useContext(SaleContext);
    if(!context) {
        throw new Error("useSale must be used within an ClientProvider")
    }
    return context;
}

export const SaleProvider = ({children}) => {

    const sales = [
        {id: uuidv4(), client: "Daniel", product: "Mouse", quantity: 1, price: 23000},
        {id: uuidv4(), client: "Johan", product: "Teclado", quantity: 1, price: 20000},
    ]

    return(
        <SaleContext.Provider value={{
            sales,
        }}>
            {children}
        </SaleContext.Provider>
    )

}