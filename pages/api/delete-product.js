import { getXataClient } from "@utils/xata";

const xata = getXataClient();

const handler = async (req, res) => {
  const { id } = req.body;
  await xata.db.Products.delete(id);

  res.end();
};

export default handler;
