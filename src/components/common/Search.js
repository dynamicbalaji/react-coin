import React from 'react';
import Loading from '../common/Loading';
import './Search.css';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';

class Search extends React.Component{
    constructor(){
        super();

        this.state = {
            searchQuery: '',
            loading: false
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
            this.setState({ loading: false });
            console.log('Success', data);
        })
        .catch((error) => {
            this.setState({ loading: false });
            console.log('Error', error);
        });
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
            </div>
        );
    }
}

export default Search;