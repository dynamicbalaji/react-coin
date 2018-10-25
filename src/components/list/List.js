import React from 'react';
// Importing with {} because its just normal 'export' and not 'export default'
import { handleResponse } from '../../helpers';

class List extends React.Component {
    // Everytime we create a class constructor, we need to call super if they are sub classes
    // All of our component classes are sub classes of React.Component
    constructor(){
        super();

        this.state = {
            loading: false,
            currencies: [],
            error: null
        };
    }

    // best place to include AJAX calls, event listeners and mutating DOM
    componentDidMount(){
        this.setState({loading: true});
        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
        .then(handleResponse)
        .then((data) => {
        this.setState({
            currencies: data.currencies, 
            loading: false
        });
    })
    .catch((error) => {
        this.setState({
            error: error.errorMessage, 
            loading: false
            });
        });
    }

    render() {
        console.log(this.state);
        if(this.state.loading){
            return <div>Loading...</div>;
        }

        return (
            <div>text</div>
        );
    }
}

export default List;