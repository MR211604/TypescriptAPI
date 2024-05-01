import { DiaryEntry, NewDiaryEntry, NonSentitiveInformation } from '../types'
import diarydata from './diaries.json'


//Definiendo el tipo para nuestros diarios
const diaries: DiaryEntry[] = diarydata as DiaryEntry[]

//Funcion para obtener la informacion del json
export const getEntries = (): DiaryEntry[] => {
  return diaries
}

//Funcion para obtener una entrada por su id
export const findEntryById = (id: number): NonSentitiveInformation | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...rest } = entry
    return rest
  }
  return undefined
}

//Funcion para obtener diaryEntries sin informacion sensible
export const getEntriesWithoutSensitiveInfo = (): NonSentitiveInformation[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }))
}

//Funcion para crear una nueva entrada
export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {

  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1, 
    ...newDiaryEntry   
  }
  diaries.push(newDiary)
  return newDiary

}