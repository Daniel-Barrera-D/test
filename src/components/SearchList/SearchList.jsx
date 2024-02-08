const SearchList = ({suggestions, func, property}) => {
    return(
        suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 mt-2 w-96 shadow-md">
                {suggestions.map(suggestion => (
                <li className="cursor-pointer p-2 hover:bg-gray-200" key={suggestion.id} onClick={() => func(suggestion)}>{suggestion[property]}</li>
            ))}
        </ul>
        )
    )
}

export default SearchList;