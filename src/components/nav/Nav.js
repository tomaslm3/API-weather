import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

function Nav({onSearch}) {
    return (
        <div className="nav">
            <div className="nav-link">
                <Link to={'/'}>
                    <h3>HOME</h3>
                </Link>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
        
    )
}

export default Nav;