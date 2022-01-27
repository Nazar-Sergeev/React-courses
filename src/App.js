import {useReducer} from "react";

import './App.css';

    const reducer = (state, action) => {

        state = {...state, count2: state.count2 + 1}

        switch (action.type) {
            case 'inc':
                return {...state, count1: state.count1 + 1}
            case 'dec':
                return {...state, count1: state.count1 - 1}
            case 'reset':
                return {...state, count1: action.payload}
        }
        // return state

    };

function App() {

useReducer(reducer, {})

  return (
    <div>

        <h1>{state.count1}</h1>
        <h1>{state.count2}</h1>
      <button onClick={() => dispatch({type: 'inc'})}>INC</button>
      <button onClick={() => dispatch({type:'dec'})}>DEC</button>
      <button onClick={() => dispatch({type:'reset', payload:8})}>RESET</button>

    </div>
  );
}

export default App;
