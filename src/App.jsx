import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { IFrame } from './pages/IFrame';
import { AppHeader } from './cmps/AppHeader';
import { About } from './pages/About'





export function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' exact component={IFrame} />
      </Switch>
    </Router>
  );
}

