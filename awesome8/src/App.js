import React from 'react'
import Styles from './App.module.scss'
import {
  Card,
  CardFooter,
  Header
} from './components';

function App() {
  return (
    <div className={Styles.app}>
      <Header heading={'자유톡'} />
      <Card />
      <CardFooter />
    </div>
  );
}

export default App;
