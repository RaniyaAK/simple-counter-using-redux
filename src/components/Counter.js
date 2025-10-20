import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Counter</h1>
      <p style={styles.count}>{count}</p>

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
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '10px',
    color: '#333',
  },
  count: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 16px',
    fontSize: '18px',
    margin: '0 8px',
    cursor: 'pointer',
  },
};
