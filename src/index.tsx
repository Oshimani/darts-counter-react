import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GameState } from './components/game-state';
import * as serviceWorker from './serviceWorker';
import { loadTheme, initializeIcons } from 'office-ui-fabric-react';
import { BASE_THEME } from "./theme";

// init UI fabric
loadTheme(BASE_THEME);
initializeIcons();

// contexts


ReactDOM.render(<GameState />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
