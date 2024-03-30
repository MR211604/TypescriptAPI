import { DiaryEntry } from '../types'
import diarydata from './diaries.json'


//Definiendo el tipo para nuestros diarios
const diaries: DiaryEntry[] = diarydata as DiaryEntry[]

//Funcion para obtener la informacion del json
const getEntries = (): DiaryEntry[] => {
  return diaries
}

//Funcion para crear una nueva entrada
const addEntry = () => {
  return null
}

//Exportando las funciones que utilizaremos
export default {
  getEntries,
  addEntry
}