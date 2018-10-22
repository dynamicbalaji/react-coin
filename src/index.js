import React from 'react';
import ReactDOM from 'react-dom';

// ES5 JS Function - So, this component is called Functional Component
const App = () => {
    return <h1>React Coin</h1>;
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);