export interface WeatherData {
    city: string;
    country: string;
    date: number;
    description: string;
    img: string;
    temperature: number;
    humidity: number;
    // wind: number;


    name: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    weather: {
      icon: string;
      description: string;
    }[];
    sys: {
      country: string;
    };
  }