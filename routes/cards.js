import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const cardsPath = path.resolve('data/cards.json');
const cards = JSON.parse(fs.readFileSync(cardsPath, 'utf-8'));

router.get('/', (req, res) => {
  res.json(cards);
});

router.get('/:_id', (req, res) => {
  const { _id } = req.params;
  const card = cards.find((item) => item._id === _id || item.id === _id);

  if (!card) return res.status(404).json({ message: 'ID do card não encontrado' });

  return res.json(card);
});

export default router;
