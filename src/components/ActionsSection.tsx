import FilterSelect from "./FilterSelect";
import SearchInput from "./SearchInput";

const ActionsSection = () => {
    return (
        <div className="actions-section">
            <SearchInput />
            <FilterSelect />
        </div>
    )
}

export default ActionsSection;