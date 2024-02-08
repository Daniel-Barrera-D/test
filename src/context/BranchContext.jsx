import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BranchContext = createContext();

export const useBranch = () => {
    const context = useContext(BranchContext);
    if(!context) {
        throw new Error("useBranch must be used within an BranchProvider")
    }
    return context;
}

export const BranchProvider = ({children}) => {

    const [searchBranch, setSearchBranch] = useState('');
    const [currency, setCurrency] = useState('');
    const [suggestionsBranch, setSuggestionsBranch] = useState([]);

    const branchOffice = [
        { id: uuidv4(), branch: "Colombia", currency: "COP" },
        { id: uuidv4(), branch: "Argentina", currency: "ARS" },
        { id: uuidv4(), branch: "Chile", currency: "CLP" },
        { id: uuidv4(), branch: "Mexico", currency: "MXN" },
        { id: uuidv4(), branch: "Brazil", currency: "BRL" },
        { id: uuidv4(), branch: "Spain", currency: "EUR" },
        { id: uuidv4(), branch: "United States", currency: "USD" },
        { id: uuidv4(), branch: "Canada", currency: "CAD" },
        { id: uuidv4(), branch: "Australia", currency: "AUD" },
        { id: uuidv4(), branch: "Japan", currency: "JPY" },
      ];

    const handleSearchBranch = (e) => {
        const searchTermB = e.target.value;
        setSearchBranch(searchTermB);

        const filtered = branchOffice.filter(branch => branch.branch.toLowerCase().includes(searchTermB.toLowerCase()));

        setSuggestionsBranch(filtered);
    }

    const handleSelectSuggestionBranch = (selectedBranch) => {
        setSearchBranch(selectedBranch.branch)
        setCurrency(selectedBranch.currency)
        setSuggestionsBranch([])
    }

    return(
        <BranchContext.Provider value={{
            handleSearchBranch,
            handleSelectSuggestionBranch,
            searchBranch,
            currency,
            suggestionsBranch
        }}>
            {children}
        </BranchContext.Provider>
    )
}