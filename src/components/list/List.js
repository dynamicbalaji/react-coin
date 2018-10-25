import React from 'react';
// Importing with {} because its just normal 'export' and not 'export default'
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Table from './Table';

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
        fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
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

    renderChangePercent(percent) {
        if (percent > 0) {
          return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
          return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
          return <span>{percent}</span>
        }
    }

    render() {
        console.log(this.state);
        /*const loading = this.state.loading;
        const error = this.state.error;
        const currencies = this.state.currencies;*/

        const { loading, error, currencies } = this.state;

        // render only loading component, if loading state is set to true
        if(loading){
            return <div className="loading-container"><Loading /></div>;
        }

        // render only error message, if error occurred while fetching data
        if(error){
            return <div className="error">{this.state.error}</div>;
        }

        return (
            <Table/>
        );
    }
}

export default List;