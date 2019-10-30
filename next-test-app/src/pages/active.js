import React, { useState } from 'react';
import App from '../components/App';
import Nav from '../components/Nav';
import Todos from '../components/Todos';

const Home = () => {
  return (
    <App>
      <Nav selectedFilter="active" />
      <Todos selectedFilter="active" />
    </App>
  );
};

export default Home;
