import React, {Fragment} from 'react';
import './components/styles/globals.css';
import Header from './components/Header'
import TopCardList from './components/Top-card-list';
import Overview from './components/Overview';


function App() {
  return (
    <Fragment>
      <Header />
      <TopCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
