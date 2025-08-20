import { ChevronDown } from "lucide-react";
import { filterSelectOptions } from "../constants";
import { cn } from "../lib/utils";
import { useState } from "react";
import { useSearchParams } from "react-router";

const FilterSelect = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const [filterText, setFilterText] = useState("Show All");
    const options: FilterOptions[] = filterSelectOptions;

    const handleFilterChange = (filterValue: string, label: string) => {
        if (searchParams.get("filter") === filterValue) return;
        setSearchParams({ filter: filterValue });
        setIsFilterDropdownOpen(false);
        setFilterText(label);
    }

    return (
        <div className="filter-select-container">
            <figure
                className="filter-select-trigger"
                onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
            >
                <p>{filterText}</p>
                <ChevronDown className="filter-icon" />
            </figure>
            <ul
                className={cn(
                    "filter-options-dropdown",
                    isFilterDropdownOpen && "filter-dropdown-active"
                )}
            >
                {options.map((option) => (
                    <li
                        key={option.filterValue}
                        className="filter-option"
                        onClick={() => handleFilterChange(option.filterValue, option.label)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterSelect;