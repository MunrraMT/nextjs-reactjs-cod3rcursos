import NavBar from './NavBar';

const Jsx = () => {
  const titulo = <h1>JSX é um conceito central</h1>;

  const a = 4;
  const b = 3;

  const subTitulo = () => <h2>{'muito legal'.toUpperCase()}</h2>;

  return (
    <main>
      <NavBar />
      {titulo}

      <h2>{a * b}</h2>

      {subTitulo()}

      <code>{JSON.stringify({ nome: 'João', idade: 30 })}</code>
    </main>
  );
};

export default Jsx;
