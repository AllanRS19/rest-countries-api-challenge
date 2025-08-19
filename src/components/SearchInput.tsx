import { Search } from "lucide-react";

const SearchInput = () => {
    return (
        <div className="search-input-container">
            <Search className="search-input-icon" />
            <input type="text" className="search-input" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchInput;