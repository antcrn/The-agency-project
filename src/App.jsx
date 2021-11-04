import './App.css';
import Navbar from './components/Navbar';
import DarkLightContextProvider from './Context/darkLightContext';
import BtnToggle from './components/btnToggle';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/';
import About from './Pages/About/';
import Works from './Pages/Works/';
import StudyCase from './components/StudyCase';
function App() {
  return (
    <>
      <DarkLightContextProvider >
        <div>
          <Router>
            <Navbar />
            <BtnToggle />
            <div className="container">
              <main className="App-header">
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/works" exact>
                    <Works />
                  </Route>
                  <Route path={"/works/:projectSlug" + "-study-case"}>
                    <StudyCase />
                  </Route>
                </Switch>
              </main>
            </div>
          </Router>
        </div>
      </DarkLightContextProvider>
    </>
  );
}

export default App;
