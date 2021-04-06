import { combineReducers } from 'redux';
import { forecastReducer } from './forecast/slice';
import { currentWeatherReducer } from './current-weather/slice';
import { searchReducer } from './search/slice';
import { picturesReducer } from './pictures/slice';

export const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
  pictures: picturesReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
