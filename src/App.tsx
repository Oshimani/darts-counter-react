import React from 'react';
import { Stack, Text, IStackStyles, getTheme, FontSizes } from "office-ui-fabric-react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './home/home';
import { Game301 } from './games/game_301/game-301';

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
    textAlign: 'center',
    fontSize: FontSizes.xxLarge,
    color: getTheme().palette.black
  };

  return (
    <div>
      <BrowserRouter>
        {/* NAV */}
        <Stack horizontal tokens={{ childrenGap: 12, padding: 4 }} styles={s_navStackStyles}>
          <Link style={s_navItemStyles} to="/home"><Text variant="xxLarge">Home</Text></Link>
          <Link style={s_navItemStyles} to="/301"><Text variant="xxLarge">301</Text></Link>
          <Link style={s_navItemStyles} to="/501"><Text variant="xxLarge">501</Text></Link>
          <Link style={s_navItemStyles} to="/roundtheClock"><Text variant="xxLarge">R-t-C</Text></Link>
        </Stack>

        {/* BROWSER OUTLET */}
        <div style={s_pageBodyStyles}>
          <Switch >
            <Route path="/301"><Game301 /></Route>
            <Route path="/501"></Route>
            <Route path="/roundtheClock"></Route>
            <Route path="/home"><Home /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
