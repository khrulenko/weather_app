import { WeatherCard } from '../redux/slices/weatherSlice';

export const searchResultMock = [
  {
    name: 'Kyiv',
    lat: 50.4500336,
    lon: 30.5241361,
    country: 'UA',
  },
];

export const fetchedWeatherMock = {
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  main: {
    temp: 287.23,
    feels_like: 285.63,
    temp_min: 286.08,
    temp_max: 287.23,
    humidity: 36,
    pressure: 1026,
  },
  wind: {
    speed: 1.34,
  },
};

export const fetchedTempMock = {
  hourly: {
    temperature_2m: [
      7.6, 7.2, 6.9, 7, 7, 7.6, 8.7, 9.7, 11, 12.3, 13.1, 13.2, 13.4, 13.4,
      13.1, 12.6, 12.1, 11.4, 10.5, 9.7, 9.2, 8.6, 7.9, 7.2,
    ],
  },
};

export const weatherCardsMock: WeatherCard[] = [
  {
    city: {
      name: 'Lviv',
      lat: 49.841952,
      lon: 24.0315921,
      country: 'UA',
      state: 'Lviv Oblast',
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 278.3,
      feels_like: 274.95,
      temp_min: 278.3,
      temp_max: 278.3,
      humidity: 94,
      pressure: 1029,
    },
    wind: {
      speed: 4.44,
    },
    hourlyTemp: [
      3.8, 3.9, 3.7, 3.4, 3.7, 4.1, 4.7, 5.8, 6.6, 7.4, 7.5, 7.9, 8.3, 8.8, 9,
      9.2, 8.3, 7.8, 6.9, 6.5, 5.9, 5.1, 4.6, 4.1,
    ],
  },
  {
    city: {
      name: 'Odesa',
      lat: 46.4843023,
      lon: 30.7322878,
      country: 'UA',
      state: 'Odesa Oblast',
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 287.14,
      feels_like: 285.98,
      temp_min: 287.14,
      temp_max: 287.14,
      humidity: 53,
      pressure: 1022,
    },
    wind: {
      speed: 1.82,
    },
    hourlyTemp: [
      12.3, 11.9, 11.5, 11.2, 11.1, 11.3, 11.5, 11.9, 12.3, 13.2, 13.9, 14.7,
      15.2, 15.1, 15, 14.9, 14.7, 14.1, 13.4, 12.8, 11.6, 11.2, 11.1, 10.5,
    ],
  },
  {
    city: {
      name: 'Kharkiv',
      lat: 49.9923181,
      lon: 36.2310146,
      country: 'UA',
      state: 'Kharkiv Oblast',
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 284.95,
      feels_like: 283.23,
      temp_min: 284.95,
      temp_max: 284.95,
      humidity: 40,
      pressure: 1026,
    },
    wind: {
      speed: 6.25,
    },
    hourlyTemp: [
      6.8, 6.4, 6.1, 6.1, 6.2, 6.8, 8.4, 9.6, 10.7, 11.6, 12.5, 12.9, 12.9,
      12.9, 12.6, 12, 11, 10, 9, 8.2, 7.7, 7.3, 6.8, 6.4,
    ],
  },
];

export const oneWeatherCardMock: WeatherCard[] = [
  {
    city: {
      name: 'Kyiv',
      lat: 50.4500336,
      lon: 30.5241361,
      country: 'UA',
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 287.23,
      feels_like: 285.63,
      temp_min: 286.08,
      temp_max: 287.23,
      humidity: 36,
      pressure: 1026,
    },
    wind: {
      speed: 1.34,
    },
    hourlyTemp: [
      7.6, 7.2, 6.9, 7, 7, 7.6, 8.7, 9.7, 11, 12.3, 13.1, 13.2, 13.4, 13.4,
      13.1, 12.6, 12.1, 11.4, 10.5, 9.7, 9.2, 8.6, 7.9, 7.2,
    ],
  },
];
