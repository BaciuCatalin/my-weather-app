// export interface WeatherData {
//     city: string;
//     country: string;
//     date: number;
//     description: string;
//     img: string;
//     temperature: number;
//     humidity: number;
//     // wind: number;


//     name: string;
//     main: {
//       temp: number;
//       temp_min: number;
//       temp_max: number;
//       humidity: number;
//     };
//     wind: {
//       speed: number;
//       deg: number;
//     };
//     weather: {
//       icon: string;
//       description: string;
//     }[];
//     sys: {
//       country: string;
//     };
//   }

export interface WeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}