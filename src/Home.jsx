import React from 'react'
import Nav from './Nav';
import Meal from './Meal';
import Pasta from './Pasta';
import Clam from './Clam';
import Vido from './Vido';
import Din from './Din';
import New from './New';

function Home() {
  return (
    <div>
      <Nav />
      <Meal />
      <Pasta />
      <Clam />
      <Vido />
      <Din />
      <New/>
    </div>
  )
}

export default Home;
