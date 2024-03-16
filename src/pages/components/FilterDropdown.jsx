import PropTypes from "prop-types";
import { CATEGORY } from "../../helpers/constants";

const FilterDropdown = ({ handleFilter }) => {
    const items = ["all"].concat(CATEGORY);

    return (
        <div className="dropdown">
            <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Category
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="dropdown-item text-capitalize"
                        onClick={() => handleFilter(item)}
                    >
                        {item}
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
