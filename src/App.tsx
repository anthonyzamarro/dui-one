import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Form from './components/containers/Form';
import JoinSignIn from './components/containers/JoinSignIn';
import Legal from './components/containers/Legal';
import SignUpWith from './components/containers/SignUpWith';
import Button from './components/elements/Button';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/sign-in">
              <SignIn />
          </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
