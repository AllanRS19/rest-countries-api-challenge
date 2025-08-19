import { ChevronDown } from "lucide-react";
import { filterSelectOptions } from "../constants";
import { cn } from "../lib/utils";
import { useState } from "react";

const FilterSelect = () => {

    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const options: FilterOptions[] = filterSelectOptions;

    return (
        <div className="filter-select-container">
            <figure
                className="filter-select-trigger"
                onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
            >
                <p>Filter by region</p>
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
                        onClick={() => console.log(option.filterValue)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterSelect;