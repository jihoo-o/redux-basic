import { createStore } from 'redux';
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const result = document.querySelector('.result');

// Actions
const ADD = 'ADD';
const MINUS = 'MINUS';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
};

const handleAdd = () => {
    countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
};

/**
 * Observer
 * The observer object should have a `next` method?
 */
const onChange = () => {
    result.innerText = countStore.getState();
};

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

const countStore = createStore(reducer);
const unsubscribe = countStore.subscribe(onChange);
