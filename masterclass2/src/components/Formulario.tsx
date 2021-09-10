import { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

const Formulario = ({ cliente }: { cliente: Cliente }) => {
  const [nome, setNome] = useState(cliente?.nome ? cliente.nome : '');
  const [idade, setIdade] = useState(cliente?.idade ? cliente.idade : 0);

  const id = cliente?.id;

  return (
    <section>
      {id && <Entrada somenteLeitura valor={id} texto="Código" />}

      <Entrada
        texto="Nome"
        className="mb-5"
        valor={nome}
        valorMudou={setNome}
      />

      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />

      <section className="flex justify-end mt-3">
        <Botao cor="blue" className="mr-2">
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor="gray">Cancelar</Botao>
      </section>
    </section>
  );
};

export default Formulario;
