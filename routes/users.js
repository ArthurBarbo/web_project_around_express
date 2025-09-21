
import { Router } from "express";
import { getUsers, getUserByid, createUser } from "../controllers/users.js";

const router = Router();

router.get("/", getUsers);

router.get("/:cardId", getUserByid);

router.post("/", createUser);

export default router;
