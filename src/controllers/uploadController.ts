import { RequestHandler } from "express";
import sharp from "sharp";
import { v4 } from "uuid";
import fs from "node:fs/promises";

export const upload: RequestHandler = async (req, res) => {
  if (req.file) {
    const newName = v4() + ".png";
    const metaData = await sharp(req.file.path)
      .toFormat("jpg")
      .toFile("./public/uploads/" + newName);
    await fs.unlink(req.file.path);
  } else {
    console.log("nenhum arquivo enviado");
  }

  res.json({ Deu: "certo" });
};
