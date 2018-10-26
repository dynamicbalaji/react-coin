import React from 'react';
import Loading from '../common/Loading';
import './Search.css';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';

class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            searchResult: [],
            searchQuery: '',
            loading: false,
            error: null
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
        this.setState({ loading: true });
        fetch(`${API_URL}/autocomplete?searchQuery=${this.state.searchQuery}`)
        .then(handleResponse)
        .then((data) => {
            this.setState({ 
                loading: false,
                searchResult: data
             });
        })
        .catch((error) => {
            this.setState({ 
                loading: false,
                error: error.errorMessage
            });
        });
    }

    renderSearchResults(){
        const { searchResult } = this.state;

        return (
            <div className="Search-result-container">
          {searchResult.map(result => (
            <div
              key={result.id}
              className="Search-result"
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
        );
    }

    render(){
        const { loading } = this.state;

        return (
            <div className="Search">
                <span className="Search-icon" />
        
                <input
                className="Search-input"
                type="text"
                placeholder="Currency Name"
                onChange={this.handleChange}
                />

                { loading && 
                    <div className="Search-loading">
                    <Loading
                    width='12px'
                    height='12px'
                    />
                    </div>
                }

                {this.renderSearchResults()}
            </div>
        );
    }
}

export default Search;