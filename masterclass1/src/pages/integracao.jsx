import { useEffect, useState } from 'react';
import LayOut from '../components/LayOut';

const Integracao = () => {
  const [dados, setDados] = useState([]);
  const [codigo, setCodigo] = useState(1);
  const [loading, setLoading] = useState(false);

  const obterDados = () => {
    setLoading(true);
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
        setLoading(false);
      });
  };

  return (
    <LayOut>
      <header>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={obterDados} type="button">
          Obter Cliente
        </button>
      </header>

      {loading ? (
        <section>
          <h2>Loading...</h2>
        </section>
      ) : (
        dados.length > 0 &&
        dados.map(({ id, nome, email }) => (
          <section key={id}>
            <h2>{nome}</h2>
            <p>{email}</p>
          </section>
        ))
      )}

      {dados.length === 0 && (
        <section>
          <h2>Sem dados</h2>
        </section>
      )}
    </LayOut>
  );
};

export default Integracao;
