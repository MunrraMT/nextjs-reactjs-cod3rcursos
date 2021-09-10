const handler = (req, res) => {
  const codigo = req.query.codigo;

  res.status(200).json([
    {
      id: codigo,
      nome: `André ${codigo}`,
      email: `andre@${codigo}.com.br`,
    },
  ]);
};

export default handler;
