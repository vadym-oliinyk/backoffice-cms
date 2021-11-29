import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import Posts from './components/Posts';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cms',
});

const App = ({ history, userToken }: any) => (
  <div>
    <StyledEngineProvider injectFirst>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/cms/posts">
              <Posts />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </StyledEngineProvider>
  </div>
);

export default App;
