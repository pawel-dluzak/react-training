import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    person: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD'){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        return {
            ...state,
            person: state.person.concat(newPerson)
            }
        }
    if (action.type === 'DELETE') {
        const newArr = state.person.filter(person => person.id !== action.personId)
        return {
            ...state, 
            person: newArr
        }
    }
        return state;
    }


const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
