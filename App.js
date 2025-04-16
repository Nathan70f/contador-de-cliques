import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="contador-container">
        <h1>Contador de Cliques</h1>
        <p className="contador-valor">{count}</p>
        <button className="botao" onClick={incrementarContador}>
          Clique aqui
        </button>
      </div>
    </div>
  );
}

export default App;
