import React from 'react';
import './Search.css';

class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            searchQuery: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const inputValue = event.target.value;

        this.setState({searchQuery: inputValue});
        console.log(this.state);
    }

    render(){
        return (
            <form>
                <input onChange={this.handleChange}/>
            </form>
        );
    }
}

export default Search;