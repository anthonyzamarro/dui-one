import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';


const App: React.FC = () => {
  return (
    <>
      <section className="img__container">
        <img src="https://via.placeholder.com/50" alt="logo" />
      </section>
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
