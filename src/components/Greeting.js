import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingsFromApi } from '../redux/greetings/greetingReducer';

const HelloWorld = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsFromApi());
  }, [dispatch]);

  return (
    <div className="greeting-container">
      <h1>Hello! This is greetings page</h1>
      <h2 className="text">{greeting.messagee}</h2>
      <button type="button" onClick={() => dispatch(fetchGreetingsFromApi())} className="btn">Click for next greeting</button>
      <br />
      <Link to="/" className="link-to">Home page</Link>
    </div>
  );
};

export default HelloWorld;
