import { createContext, useContext, useState } from "react";
import { useBranch } from "./BranchContext";
import { v4 as uuidv4 } from "uuid";

export const ProductContext = createContext();

export const useProduct = () => {
    const context = useContext(ProductContext);
    if(!context) {
        throw new Error("useProduct must be used within an ProductProvider")
    }
    return context;
}

export const ProductProvider = ({children}) => {

    const {searchBranch} = useBranch();

    const [searchProduct, setSearchProduct] = useState('');
    const [suggestionsProduct, setSuggestionsProduct] = useState([]);
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    const products = [
        { id: uuidv4(), name: "Mouse", price: 23000, country: "Colombia" },
        { id: uuidv4(), name: "Teclado", price: 20000, country: "Argentina" },
        { id: uuidv4(), name: "Monitor", price: 30000, country: "Chile" },
        { id: uuidv4(), name: "Laptop", price: 80000, country: "Mexico" },
        { id: uuidv4(), name: "Smartphone", price: 120000, country: "Brazil" },
        { id: uuidv4(), name: "Headphones", price: 5000, country: "Spain" },
        { id: uuidv4(), name: "Tablet", price: 35000, country: "United States" },
        { id: uuidv4(), name: "Camera", price: 45000, country: "Canada" },
        { id: uuidv4(), name: "Printer", price: 6000, country: "Australia" },
        { id: uuidv4(), name: "Gaming Console", price: 250000, country: "Japan" },
        { id: uuidv4(), name: "Keyboard", price: 18000, country: "Colombia" },
        { id: uuidv4(), name: "Monitor", price: 32000, country: "Argentina" },
        { id: uuidv4(), name: "Laptop", price: 75000, country: "Chile" },
        { id: uuidv4(), name: "Smartwatch", price: 90000, country: "Mexico" },
        { id: uuidv4(), name: "Camera Lens", price: 55000, country: "Brazil" },
        { id: uuidv4(), name: "Printer Paper", price: 3000, country: "Spain" },
        { id: uuidv4(), name: "Gaming Mouse", price: 12000, country: "United States" },
        { id: uuidv4(), name: "External Hard Drive", price: 80000, country: "Canada" },
        { id: uuidv4(), name: "Wireless Earbuds", price: 35000, country: "Australia" },
        { id: uuidv4(), name: "Virtual Reality Headset", price: 180000, country: "Japan" },
    ]

    const productsFilterByBranch = products.filter(product => product.country === searchBranch);

    const handleSearchProduct = (e) => {
        const searchP = e.target.value;
        setSearchProduct(searchP);

        const filtered = productsFilterByBranch.filter(product => product.name.toLowerCase().includes(searchP.toLowerCase()));

        setSuggestionsProduct(filtered);
    }
    
    const handleQuantity = (e) => {
        const q = e.target.value;
        setQuantity(q);
        setSubTotal(price * q); 
    }

    const handleSelectSuggestionProduct = (selectedProduct) => {
        setSearchProduct(selectedProduct.name)
        setPrice(selectedProduct.price)
        setSuggestionsProduct([])
    }

    return(
        <ProductContext.Provider value={{
            handleSearchProduct,
            handleSelectSuggestionProduct,
            handleQuantity,
            searchProduct,
            suggestionsProduct,
            price,
            quantity,
            subTotal,
        }}>
            {children}
        </ProductContext.Provider>
    )
}