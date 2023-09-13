import React from "react";

function SearchBar() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Search" />
                <div>
                    <input type="checkbox" />
                    Only show products in stock
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
