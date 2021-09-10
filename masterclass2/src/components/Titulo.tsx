const Titulo = ({ children }) => {
  return (
    <section className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-xl">{children}</h1>
      <hr className="border-2 border-purple-500" />
    </section>
  );
};

export default Titulo;
