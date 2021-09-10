import Cliente from '../core/Cliente';
import { IconeEdicao, IconeLixo } from './Icones';

const Tabela = (props: {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}) => {
  const showAcoes = props.clienteSelecionado || props.clienteExcluido;

  const renderizarCabecalho = () => (
    <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
      <tr className="text-center">
        <th className="p-4">Código</th>
        <th className="p-4">Nome</th>
        <th className="p-4">Idade</th>

        {showAcoes && <th className="p-4">Ações</th>}
      </tr>
    </thead>
  );

  const renderizarAcoes = (cliente: Cliente) => (
    <td className="flex justify-center">
      {props.clienteSelecionado && (
        <button
          onClick={() => props?.clienteSelecionado(cliente)}
          className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"
          type="button"
        >
          {IconeEdicao()}
        </button>
      )}
      {props.clienteExcluido && (
        <button
          onClick={() => props?.clienteExcluido(cliente)}
          className="flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50"
          type="button"
        >
          {IconeLixo()}
        </button>
      )}
    </td>
  );

  const renderizarCorpo = () => (
    <tbody>
      {props.clientes?.map((cliente, index) => (
        <tr
          className={`text-center ${
            index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'
          }`}
          key={cliente.id}
        >
          <td className="p-4">{cliente.id}</td>
          <td className="p-4">{cliente.nome}</td>
          <td className="p-4">{cliente.idade}</td>
          {showAcoes && renderizarAcoes(cliente)}
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
