import { ReactNode } from 'react';
import Titulo from './Titulo';

const Layout = ({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md">
      <Titulo>{titulo}</Titulo>
      <section className="p-6">{children}</section>
    </section>
  );
};

export default Layout;
