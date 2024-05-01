export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

//Definiendo los estados del clima
export enum WeatherState {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum VisibilityState {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

//Creando la interfaz que va definir el tipo de datos para nuestros diarios:
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NonSentitiveInformation = Omit<DiaryEntry, 'comment'>; 

//Aqui trae los parametros necesarios para agregar una nueva entrada
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;