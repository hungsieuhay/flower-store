import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import "./SearchInput.scss";

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
};

function SearchInput({ onSubmit = null }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 150);
  };
  return (
    <form className="search-input">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </form>
  );
}

export default SearchInput;
