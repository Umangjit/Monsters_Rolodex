import React from 'react';
import './search_box.css';

export const SearchBox = ({placeholder, handleChange}) =>{
    return (
        <div className="searchBox">
             <input type="search" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}