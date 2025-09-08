import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const usersPath = path.resolve("data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:_id", (req, res) => {
  const { _id } = req.params;

  const user = users.find((user) => {
    return user._id === _id || user.id === _id;
  });

  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

  return res.json(user);
});

export default router;
