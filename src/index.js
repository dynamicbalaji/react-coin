import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
import List from './components/list/List';

// ES5 JS Function - So, this component is called Functional Component
// In JSX, Use 'className' instead of 'class' as class is a reserved keyword in JS
// If you want to return an element on its own line, you have to use a pair of parenthesis. 
// You should return only one parent element, we can't return two sibling elements without wrapping them in a parent element.
const App = () => {
    return (
        <div>
            <Header/>
            <List/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);