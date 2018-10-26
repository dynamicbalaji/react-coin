import React from 'react';
import './Search.css';

class Search extends React.Component{
    render(){
        return (
            <form>
                <input name="searchQuery"/>
                <button>Submit</button>
            </form>
        );
    }
}

export default Search;