import React from "react";

const SearchBox = ({ onSearch }) => {
    return (
        <div>
            <input type="search" onChange={onSearch} className="pa2"/>
        </div>
    )
}

export default SearchBox