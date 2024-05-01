import express from "express";
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from "../utils/diaryValidations";

const router = express.Router();

router.get('/', (_, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
})

//Obtener un diario por su id
router.get('/:id', (req, res) => {
  const diary = diaryServices.findEntryById(Number(req.params.id))
  res.send(diary)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const diaryAdded = diaryServices.addEntry(newDiaryEntry)
    res.json(diaryAdded)

  } catch (error) {
    if (typeof error === 'object' && error !== null && 'message' in error) {      
      res.status(400).send(error.message);
    } else {
      res.status(400).send('An unhandled error occurred');
    }
  }

})

export default router