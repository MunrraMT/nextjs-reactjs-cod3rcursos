const handler = (req, res) => {
  if (req.method === 'GET') {
    handlerGet(req, res);
  } else {
    res.status(405).send();
  }
};

const handlerGet = (req, res) => {
  res.status(200).json({ id: 3, nome: 'André', idade: 31 });
};

export default handler;
