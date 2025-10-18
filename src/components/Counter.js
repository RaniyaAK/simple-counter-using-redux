import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}> 
      <h1>Counter: {count}</h1>
      <div>
        <button style={styles.button} onClick={() => dispatch(decrement())}>-</button>
        <button style={styles.button} onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default Counter;


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '5px',
  },
};
