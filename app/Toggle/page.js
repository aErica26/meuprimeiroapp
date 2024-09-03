import React from 'react';
import ReactDOM from 'react-dom';
import ToggleText from './ToggleText'; 
const App = () => (
  <div>
    <h1>Exemplo de Hook useToggle</h1>
    <ToggleText />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
