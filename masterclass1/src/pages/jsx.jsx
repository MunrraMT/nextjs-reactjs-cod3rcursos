import LayOut from '../components/LayOut';
import NavBar from '../components/NavBar';

const Jsx = () => {
  const titulo = <h1>JSX é um conceito central</h1>;

  const a = 4;
  const b = 3;

  const subTitulo = () => <h2>{'muito legal'.toUpperCase()}</h2>;

  return (
    <LayOut>
      {titulo}

      <h2>{a * b}</h2>

      {subTitulo()}

      <code>{JSON.stringify({ nome: 'João', idade: 30 })}</code>
    </LayOut>
  );
};

export default Jsx;
