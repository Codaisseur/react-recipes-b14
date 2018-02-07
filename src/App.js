import React, { Component } from 'react'
import SeedButton from './recipes/SeedButton'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SeedButton />
        <RecipesContainer />
      </div>
    )
  }
}

export default App
