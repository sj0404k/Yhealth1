/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './android/app/src/App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';

enableScreens();
AppRegistry.registerComponent(appName, () => App);
