import Cliente from '../core/Cliente';

const Tabela = ({ clientes }: { clientes: Cliente[] }) => {
  const renderizarCabecalho = () => (
    <thead>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    </thead>
  );

  const renderizarCorpo = () => (
    <tbody>
      {clientes?.map(({ id, nome, idade }, index) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{nome}</td>
          <td>{idade}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table>
      {renderizarCabecalho()}
      {renderizarCorpo()}
    </table>
  );
};

export default Tabela;
