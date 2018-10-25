import React from 'react';

class List extends React.Component {
    // Everytime we create a class constructor, we need to call super if they are sub classes
    // All of our component classes are sub classes of React.Component
    constructor(){
        super();

        this.state = {
            loading: true,
            currencies: [],
            error: null
        };
    }

    // best place to include AJAX calls, event listeners and mutating DOM
    componentDidMount(){
        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
        .then(response => {
        return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
        });
        })
        .then((data) => {
        console.log('Success', data);
        })
        .catch((error) => {
        console.log('Error', error);
        });
    }

    render() {
        if(this.state.loading){
            return <div>Loading...</div>;
        }

        return (
            <div>text</div>
        );
    }
}

export default List;