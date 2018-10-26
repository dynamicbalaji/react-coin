import React from 'react';
import './Search.css';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';

class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            searchQuery: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const searchQuery = event.target.value;

        this.setState({searchQuery});

        // If searchQuery isn't present, don't send request to server
        if (!searchQuery) {
            return '';
        }

        fetch(`${API_URL}/autocomplete?searchQuery=${this.state.searchQuery}`)
        .then(handleResponse)
        .then((data) => {
            console.log('Success', data);
        })
        .catch((error) => {
            console.log('Error', error);
        });
    }

    render(){
        return (
            <div className="Search">
                <span className="Search-icon" />
        
                <input
                className="Search-input"
                type="text"
                placeholder="Currency Name"
                onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Search;