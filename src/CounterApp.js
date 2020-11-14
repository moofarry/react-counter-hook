import React, {useState} from 'react'; //hook useState
import PropTypes from 'prop-types';

const CounterApp = ({ value= 10 }) => {

    const [counter , setCounter] = useState(value); 

    const handleAddFunc = () => setCounter(counter+1);
    const handleAddBackFunc = () => setCounter(counter-1    );
    const handleAddResetFunc = () =>  setCounter( value);

    return (
      <div>
          <h1> CounterApp </h1>
          <h2> {counter}</h2>
          <button id="#reset" onClick= { handleAddBackFunc }> - 1 </button>
          <button id="#decrement" onClick= { handleAddResetFunc }> Reset </button>
          <button id="#increment" onClick= { handleAddFunc }> + 1 </button>
      </div>
  );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


