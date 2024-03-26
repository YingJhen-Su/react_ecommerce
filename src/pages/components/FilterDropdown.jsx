import PropTypes from "prop-types";
import { CATEGORY } from "../../helpers/constants";

const FilterDropdown = ({ handleFilter }) => {
    const items = ["all"].concat(CATEGORY);

    return (
        <div className="dropdown">
            <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="category filter"
                aria-haspopup="true"
                aria-controls="categoryFilter"
            >
                Category
            </button>

            <ul id="categoryFilter" className="dropdown-menu dropdown-menu-end">
                {items.map((item, index) => (
                    <li key={index}>
                        <button
                            type="button"
                            className="dropdown-item text-capitalize"
                            onClick={() => handleFilter(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

FilterDropdown.propTypes = {
    handleFilter: PropTypes.func,
};

export default FilterDropdown;
