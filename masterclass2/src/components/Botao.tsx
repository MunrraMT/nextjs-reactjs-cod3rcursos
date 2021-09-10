import { ReactNode } from 'react';

const Botao = ({
  cor = 'blue',
  className,
  children,
}: {
  cor?: 'green' | 'blue' | 'gray';
  className?: string;
  children: ReactNode;
}) => {
  return (
    <button
      className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Botao;
