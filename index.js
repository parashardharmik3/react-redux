import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';  // Correct import
import axios from 'axios';
const store = createStore(combineReducers({
    account: accountreducer,
    bonus: bonusreducer
}), applyMiddleware(logger.default));
// Reducer function
function accountreducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case 'inc':
            return { amount: state.amount + 1 };
        case 'dec':
            return { amount: state.amount - 1 };
        case 'incByAmount':
            if(action.payload>=100)
            return { amount: state.amount + action.payload };
        case 'init':
            return { amount: action.payload };
        default:
            return state;
    }
}
function bonusreducer(state = { points:0},action){
    switch (action.type) {
        case "incr":
            return {points : state.points +1 }
        case "incByAmount":
            if(action.payload>= 100){
                return {points : state.points +1 }
            }else{
                return state;
            }
        default:
            return state;
    }
}

// Create the store with middleware


// Dispatch some actions
// store.dispatch({ type: 'inc' });
// store.dispatch({ type: 'dec' });
store.dispatch({ type: 'incByAmount', payload: 500});
 
console.log(store.getState());

// Define an async action creator
// const getUser = () => async (dispatch, getState) => {
//     try {
//         const { data } = await axios.get('http://localhost:3000/account/1');
//         dispatch({ type: 'init', payload: data.amount });
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// };

// Dispatch the async action
// store.dispatch(getUser());
