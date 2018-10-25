import React from 'react';
// Importing with {} because its just normal 'export' and not 'export default'
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../common/Loading';

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
        if(this.state.loading){
            return <div className="loading-container"><Loading /></div>;
        }

        return (
            <div className="Table-container"> 
            <table className="Table">
              <thead className="Table-head">
                <tr>
                  <th>Cryptocurrency</th>
                  <th>Price</th>
                  <th>Market Cap</th>
                  <th>24H Change</th>  
                </tr>    
              </thead>
              <tbody className="Table-body">
              {this.state.currencies.map((currency) => (
                <tr key={currency.id}>
                  <td>
                    <span className="Table-rank">{currency.rank}</span>
                    {currency.name}
                  </td>
                  <td>
                    <span className="Table-dollar">$ {currency.price}</span>
                  </td>
                  <td>
                    <span className="Table-dollar">$ {currency.marketCap}</span>
                  </td>
                  <td>
                      {this.renderChangePercent(currency.percentChange24h)}
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        );
    }
}

export default List;