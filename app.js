import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (res, req) => {
  res.send("servidor ta on pai");
});

app.listen(PORT, () => {
  console.log(`ta on porta:${PORT}`);
});
