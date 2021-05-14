import { combineReducers }  from 'redux';
import themeReducers from './ThemeColor/index';
import themeTitleReducers from './ThemeColorTitle/index';

export default combineReducers({
  theme: themeReducers,
  themeText:  themeTitleReducers
})