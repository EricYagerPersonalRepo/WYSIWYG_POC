import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingScreen from './Components/LoadingScreen';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  // Generate the route elements
  const elements = useRoutes(routes);

  return (
    <div className="App">
      {elements}
    </div>
  );
}

export default App;
