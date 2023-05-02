// export interface ForecastData {
// dt_txt: any
// icon: any
// temp: any
//     cod: string
//     message: number
//     cnt: number
//     list: List[]
//     city: City
//   }
  
//   export interface List {
//     dt: number
//     main: Main
//     weather: Weather[]
//     clouds: Clouds
//     wind: Wind
//     visibility: number
//     pop: number
//     sys: Sys
//     dt_txt: string
//     rain?: Rain
//     city: City
//     hour: number;
//   }
  
//   export interface Main {
//     temp: number
//     feels_like: number
//     temp_min: number
//     temp_max: number
//     pressure: number
//     sea_level: number
//     grnd_level: number
//     humidity: number
//     temp_kf: number
//   }
  
//   export interface Weather {
//     id: number
//     main: string
//     description: string
//     icon: string
//   }
  
//   export interface Clouds {
//     all: number
//   }
  
//   export interface Wind {
//     speed: number
//     deg: number
//     gust: number
//   }
  
//   export interface Sys {
//     pod: string
//   }
  
//   export interface Rain {
//     "3h": number
//   }
  
//   export interface City {
//     id: number
//     name: string
//     coord: Coord
//     country: string
//     population: number
//     timezone: number
//     sunrise: number
//     sunset: number
//   }
  
//   export interface Coord {
//     lat: number
//     lon: number
//   }

// export interface ForecastData {
//   cod: string
//   message: number
//   cnt: number
//   list: List[]
//   city: City
// }

// export interface List {
//   dt: number
//   main: Main
//   weather: Weather[]
//   clouds: Clouds
//   wind: Wind
//   visibility: number
//   pop: number
//   sys: Sys
//   dt_txt: string
//   rain?: Rain
// }

// export interface Main {
//   temp: number
//   feels_like: number
//   temp_min: number
//   temp_max: number
//   pressure: number
//   sea_level: number
//   grnd_level: number
//   humidity: number
//   temp_kf: number
// }

// export interface Weather {
//   id: number
//   main: string
//   description: string
//   icon: string
// }

// export interface Clouds {
//   all: number
// }

// export interface Wind {
//   speed: number
//   deg: number
//   gust: number
// }

// export interface Sys {
//   pod: string
// }

// export interface Rain {
//   "3h": number
// }

// export interface City {
//   id: number
//   name: string
//   coord: Coord
//   country: string
//   population: number
//   timezone: number
//   sunrise: number
//   sunset: number
// }

// export interface Coord {
//   lat: number
//   lon: number
// }

export interface ForecastData7 {
  [x: string]: any
  city_name: string
  country_code: string
  data: Daum[]
  lat: string
  lon: string
  state_code: string
  timezone: string
  
}

export interface Daum {
[x: string]: any
  app_max_temp: number
  app_min_temp: number
  clouds: number
  clouds_hi: number
  clouds_low: number
  clouds_mid: number
  datetime: string
  dewpt: number
  high_temp: number
  low_temp: number
  max_dhi: any
  max_temp: number
  min_temp: number
  moon_phase: number
  moon_phase_lunation: number
  moonrise_ts: number
  moonset_ts: number
  ozone: number
  pop: number
  precip: number
  pres: number
  rh: number
  slp: number
  snow: number
  snow_depth: number
  sunrise_ts: number
  sunset_ts: number
  temp: number
  ts: number
  uv: number
  valid_date: string
  vis: number
  weather: Weather
  wind_cdir: string
  wind_cdir_full: string
  wind_dir: number
  wind_gust_spd: number
  wind_spd: number
  icon: string
}

export interface Weather {
  description: string
  code: number
  icon: string
}

// export interface Forecast {
//    [hour: number]: Daum[] 
//   ;
// }

