import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import HeroesContextProvider from './context/HeroesContext';
import HomePage from './pages/Home/HomePage.component';
import Header from './components/Common/Header/Header.component';
import "./App.css";

const App = () => (

  <BrowserRouter>
    <Header />

    <Container maxWidth="lg" className="main-container">

      <Switch>
        <Route exact path='/'>

        <HeroesContextProvider>
        <HomePage />
        </HeroesContextProvider>
        
        </Route>
      </Switch>

    </Container>
 
  </BrowserRouter>

)

export default App;


 