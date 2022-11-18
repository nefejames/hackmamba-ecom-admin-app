import { getXataClient } from "@utils/xata";

const xata = getXataClient();

const handler = async (req, res) => {
  const { name, price, imgUrl } = req.body;

  await xata.db.Products.create({
    name: name,
    price: price,
    img: imgUrl,
  });

  res.end();
};

export default handler;
