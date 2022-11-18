import { getXataClient } from "@utils/xata";

const xata = getXataClient();

const handler = async (req, res) => {
  const { id, name, price } = req.body;

  await xata.db.Products.update(id, {
    name: name,
    price: price,
  });

  res.end();
};

export default handler;
