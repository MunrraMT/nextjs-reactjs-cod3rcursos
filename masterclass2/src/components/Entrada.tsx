const Entrada = ({
  texto,
  tipo = 'text',
  valor,
  somenteLeitura = false,
  className,
  valorMudou,
}: {
  texto: string;
  tipo?: 'text' | 'number';
  valor: any;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (valor: any) => void;
}) => {
  return (
    <section className={`flex flex-col ${className}`}>
      <label className="mb-2" htmlFor="input-entrada">
        {texto}
      </label>
      <input
        id="input-entrada"
        type={tipo}
        value={valor}
        readOnly={somenteLeitura}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-200 px-4 py-2 ${
          !somenteLeitura && 'focus:bg-white'
        }`}
        onChange={(e) => valorMudou?.(e.target.value)}
      />
    </section>
  );
};

export default Entrada;
