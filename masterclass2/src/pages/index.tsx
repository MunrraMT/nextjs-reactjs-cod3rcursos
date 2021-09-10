import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';

const clientes = [
  new Cliente('Ana', 34, '1'),
  new Cliente('Bia', 24, '2'),
  new Cliente('Clara', 44, '3'),
  new Cliente('Debora', 14, '4'),
  new Cliente('Ellen', 54, '5'),
];

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} />
      </Layout>
    </main>
  );
}
