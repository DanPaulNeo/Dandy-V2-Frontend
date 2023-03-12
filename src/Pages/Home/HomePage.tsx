import React from 'react';
import config from '../../Config/config';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction } from '../../State/reducers';

function HomePage() {
  const dispatch = useDispatch();
  const {value} = useSelector((state: any) => state.app);

  const handleClick = () => {
    dispatch(incrementAction());
  };

  const handleGetState = () => {
    console.log(value);
  };

  return (
    <div>
      <h1>This is home page</h1>
      <h1>ENV : {config.environment}</h1>
      <p>Value: {value}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleGetState}>Get State</button>
    </div>
  );
}

export default HomePage;