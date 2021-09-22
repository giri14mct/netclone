import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import TvShows from './components/TvShows/TvShows'
import Popular from './components/Popular/Popular'
import About from './components/About/About'

export const movieContext = createContext();

const App = () => {

  //For Context Purpose

  const [selectedMovie, setSelectedMovie] = useState([{
    movieName: '',
    movieImg: '',
    movieOverView: '',
    movieOrigin: '',
    releasedYear: null,
    movieRating: null
  }]);

  return (
    <movieContext.Provider value={[selectedMovie, setSelectedMovie]} >
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/TvShows' component={TvShows}></Route>
          <Route path='/Movies' component={Movies}></Route>
          <Route path='/Popular' component={Popular}></Route>
          <Route path='/About' component={About} ></Route>
        </Switch>
      </Router>
    </movieContext.Provider>

  )
}
export default App