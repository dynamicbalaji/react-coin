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