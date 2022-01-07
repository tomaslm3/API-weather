import React from "react";
import SearchBar from "../searchBar/SearchBar";
import './Nav.css'

function Nav({onSearch, success, switchTheme, theme}) {
    return (
        <div className="nav">
            <div className="nav-link">
                <SearchBar onSearch={onSearch} success={success} switchTheme={switchTheme} theme={theme}/>
            </div>
        </div>
        
    )
}

export default Nav;