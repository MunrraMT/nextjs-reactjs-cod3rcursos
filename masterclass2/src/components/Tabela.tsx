import Cliente from '../core/Cliente';

const Tabela = ({ clientes }: { clientes: Cliente[] }) => {
  const renderizarCabecalho = () => (
    <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
      <tr className="text-left">
        <th className="p-4">Código</th>
        <th className="p-4">Nome</th>
        <th className="p-4">Idade</th>
      </tr>
    </thead>
  );

  const renderizarCorpo = () => (
    <tbody>
      {clientes?.map(({ id, nome, idade }, index) => (
        <tr
          className={`text-left ${
            index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'
          }`}
          key={id}
        >
          <td className="p-4">{id}</td>
          <td className="p-4">{nome}</td>
          <td className="p-4">{idade}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className="w-full rounded-xl overflow-hidden">
      {renderizarCabecalho()}
      {renderizarCorpo()}
    </table>
  );
};

export default Tabela;
