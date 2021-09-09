import { useState } from 'react';
import LayOut from '../components/LayOut';

const Estado = () => {
  const [num, setNum] = useState(0);

  return (
    <LayOut titulo="Componente com estado">
      <h2>{num}</h2>
      <button type="button" onClick={() => setNum((prev) => prev + 1)}>
        Aumentar
      </button>
    </LayOut>
  );
};

export default Estado;
