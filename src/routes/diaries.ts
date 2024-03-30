import express from "express";

const router = express.Router();

router.get('/', (_, res) => {
  res.send('Fetching all diaries')
})

router.post('/', (_, res) => {
  res.send('Creating a new diary')
})

export default router