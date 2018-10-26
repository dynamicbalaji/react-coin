import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import './index.css';
import List from './components/list/List';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';

// ES5 JS Function - So, this component is called Functional Component
// In JSX, Use 'className' instead of 'class' as class is a reserved keyword in JS
// If you want to return an element on its own line, you have to use a pair of parenthesis. 
// You should return only one parent element, we can't return two sibling elements without wrapping them in a parent element.
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={List} exact/>
                    <Route path="/currency/:id" component={Detail} exact/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);