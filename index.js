/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import stack from './src/navigation/stack';

AppRegistry.registerComponent(appName, () => stack);
