import { Router } from "express";
import { createCard, deleteById, getCards } from "../controllers/cards.js";

const router = Router();

router.get("/", getCards);

router.delete("/:cardId", deleteById);

router.post("/", createCard);

export default router;
