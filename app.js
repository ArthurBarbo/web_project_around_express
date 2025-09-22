import express from "express";
import cards from "./routes/cards.js";
import users from "./routes/users.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/aroundb", {
    //retirar daqui pra baixo antes da entrega
  })
  .then(async () => {
    console.log("MongoDB conectado com sucesso!");

    const admin = new mongoose.mongo.Admin(mongoose.connection.db);
    const info = await admin.listDatabases();
    console.log(
      "Bancos de dados disponíveis:",
      info.databases.map((db) => db.name)
    );
  })
  .catch((err) => console.log("Erro ao conectar ao MongoDB:", err));
//ate aqui
const PORT = process.env.PORT || 3000;
app.use((req, res, next) => {
  req.user = {
    _id: "68d1a7c67f1a6be84dff5bee",
  };

  next();
});

app.use("/cards", cards);
app.use("/users", users);

app.use((req, res) => {
  res.status(404).json({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT, () => {
  console.log(`o Servidor está hospedado na porta: ${PORT}`);
});

export const createCard = (req, res) => {
  console.log(req.user._id); // _id se tornará acessível
};
