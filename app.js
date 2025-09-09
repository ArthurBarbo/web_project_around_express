import express from "express";
import cards from "./routes/cards.js";
import users from "./routes/users.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/cards", cards);
app.use("/users", users);

app.use((req, res) => {
  res.status(404).json({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT, () => {
  console.log(`o Servidor está hospedado na porta: ${PORT}`);
});
