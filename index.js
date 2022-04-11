/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import stack from './src/navigation/stack';
import Model from './src/components/model'
import Button from './src/components/button';
import Drawer from './src/navigation/Drawer';
import Model1 from './src/components/Modal1';

 
AppRegistry.registerComponent(appName, () => Drawer);
