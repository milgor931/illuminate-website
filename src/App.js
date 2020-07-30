import React from 'react';
import Nav from './containers/Nav';
import Home from './containers/Home';
import Blog from './containers/Blog';
import Podcast from './containers/Podcast';
import About from './containers/About';
import Donate from './components/Donate';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/Theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/podcast" component={Podcast} />
          <Route path="/about" component={About} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}


export default App;
