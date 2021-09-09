import { useRouter } from 'next/router';

import LayOut from '../../../components/LayOut';

const ClientePorCodigo = () => {
  const router = useRouter();

  return (
    <LayOut titulo="Navegação Dinâmica">
      <h2>Estado = {router.query.estado}</h2>
      <h3>Cidade = {router.query.cidade}</h3>
    </LayOut>
  );
};

export default ClientePorCodigo;
