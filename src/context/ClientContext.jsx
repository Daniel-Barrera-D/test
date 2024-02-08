import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ClientContext = createContext();

export const useClient = () => {
    const context = useContext(ClientContext);
    if(!context) {
        throw new Error("useClient must be used within an ClientProvider")
    }
    return context;
}

export const ClientProvider = ({children}) => {

    const [searchClient, setSearchClient] = useState('');
    const [suggestionsClient, setSuggestionsClient] = useState([]);

    const [clients, setClients] = useState([
        { id: uuidv4(), name: "Daniel" },
        { id: uuidv4(), name: "Johan" },
        { id: uuidv4(), name: "Jose" },
        { id: uuidv4(), name: "Sophia" },
        { id: uuidv4(), name: "Liam" },
        { id: uuidv4(), name: "Olivia" },
        { id: uuidv4(), name: "Noah" },
        { id: uuidv4(), name: "Emma" },
        { id: uuidv4(), name: "Ava" },
        { id: uuidv4(), name: "Isabella" },
        { id: uuidv4(), name: "Liam" },
        { id: uuidv4(), name: "Sophia" },
        { id: uuidv4(), name: "Jackson" },
        { id: uuidv4(), name: "Olivia" },
        { id: uuidv4(), name: "Lucas" },
        { id: uuidv4(), name: "Ava" },
        { id: uuidv4(), name: "Logan" },
        { id: uuidv4(), name: "Mia" },
        { id: uuidv4(), name: "Ethan" },
        { id: uuidv4(), name: "Amelia" },
        { id: uuidv4(), name: "Lily" },
        { id: uuidv4(), name: "Oliver" },
        { id: uuidv4(), name: "Mason" },
        { id: uuidv4(), name: "Harper" },
        { id: uuidv4(), name: "Elijah" },
        { id: uuidv4(), name: "Evelyn" },
        { id: uuidv4(), name: "Ella" },
        { id: uuidv4(), name: "Aiden" },
        { id: uuidv4(), name: "Avery" },
        { id: uuidv4(), name: "Scarlett" },
        { id: uuidv4(), name: "Sofia" },
        { id: uuidv4(), name: "Carter" },
        { id: uuidv4(), name: "Aria" },
        { id: uuidv4(), name: "Madison" },
        { id: uuidv4(), name: "Grace" },
        { id: uuidv4(), name: "Lily" },
        { id: uuidv4(), name: "Chloe" },
        { id: uuidv4(), name: "Ethan" },
        { id: uuidv4(), name: "Zoe" },
        { id: uuidv4(), name: "Luke" },
        { id: uuidv4(), name: "Hannah" },
        { id: uuidv4(), name: "Grayson" },
        { id: uuidv4(), name: "Layla" },
        { id: uuidv4(), name: "Emma" },
        { id: uuidv4(), name: "Leo" },
        { id: uuidv4(), name: "Stella" },
        { id: uuidv4(), name: "Levi" },
        { id: uuidv4(), name: "Nora" },
        { id: uuidv4(), name: "Amelia" },
    ])

    const handleSearchClients = (e) => {
        const searchTerm = e.target.value;
        setSearchClient(searchTerm);
        
        const filtered = clients.filter(client => client.name.toLowerCase().includes(searchClient.toLowerCase()));

        setSuggestionsClient(filtered);
    }

    
    const handleSelectSuggestionClient = (selectedClient) => {
        // console.log('Cliente seleccionado:', selectedClient);
        setSearchClient(selectedClient.name);
        // console.log(searchClient);
        setSuggestionsClient([]);
    };

    return(
        <ClientContext.Provider value={{
            handleSearchClients,
            handleSelectSuggestionClient,
            setClients,
            searchClient,
            suggestionsClient,
        }}>
            { children }
        </ClientContext.Provider>
    )
}