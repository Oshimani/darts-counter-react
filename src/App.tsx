import React from 'react';
import { Stack, Text, IStackStyles, getTheme, FontSizes } from "office-ui-fabric-react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './home/home';
import { GameX01 } from './games/game_X01/game-X01';
import { GameRTC } from './games/game-rtc/game-rtc';

export const App = () => {

  // Styles
  const s_navStackStyles: IStackStyles = {
    root: {
      backgroundColor: getTheme().palette.themePrimary,
      color: getTheme().palette.white
    }
  };

  const s_navItemStyles = {
    color: getTheme().palette.white,
    textDecoration: 'none'
  };

  const s_pageBodyStyles: React.CSSProperties = {
    padding: 4,
    // textAlign: 'center',
    fontSize: FontSizes.xxLarge,
    color: getTheme().palette.black
  };

  return (
    <div>
      <BrowserRouter>
        {/* NAV */}
        <Stack horizontal tokens={{ childrenGap: 12, padding: 4 }} styles={s_navStackStyles}>
          <Link style={s_navItemStyles} to="/"><Text variant="xxLarge">Home</Text></Link>
          <Link style={s_navItemStyles} to="/X01"><Text variant="xxLarge">X01</Text></Link>
          <Link style={s_navItemStyles} to="/roundtheClock"><Text variant="xxLarge">R-t-C</Text></Link>
        </Stack>

        {/* BROWSER OUTLET */}
        <div style={s_pageBodyStyles}>
          <Switch >
            <Route path="/X01"><GameX01 /></Route>
            <Route path="/roundtheClock"><GameRTC /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
