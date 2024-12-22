import React, { FC, JSX } from 'react';
import './App.scss';
import Header from './components/Header/Header';


const App: FC = ():JSX.Element => {
  return(
    <div className="App">
      <Header />
    </div>
  )
}

export default App;
