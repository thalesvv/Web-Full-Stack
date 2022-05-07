// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getDataBase from "../../utils/database.js"

export default async function handler(req, res) {
  const db = await getDataBase();
  const collection = db.collection("user");

  const response = await collection.find({});


  res.status(200).json({response});
}