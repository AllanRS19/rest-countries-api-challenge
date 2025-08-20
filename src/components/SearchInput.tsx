import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useDebounce from "../lib/hooks/useDebounce";
import { Search } from "lucide-react";

const SearchInput = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedTerm = useDebounce(searchTerm, 1000);

    useEffect(() => {
        const currentParams = searchParams.get("filter") as string || "";
        if (debouncedTerm === "") {
            searchParams.delete("search");
            setSearchParams(searchParams);
        } else {
            if (currentParams !== "")
                setSearchParams({ filter: currentParams, search: debouncedTerm })
            else
                setSearchParams({ search: debouncedTerm })
        }
    }, [debouncedTerm, searchParams, setSearchParams]);

    return (
        <div className="search-input-container">
            <Search className="search-input-icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    )
}

export default SearchInput;