// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import PropTypes from 'prop-types'
import RecipeItem, { recipeItemShape } from './RecipeItem'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeItemShape).isRequired,
    updateRecipe: PropTypes.func.isRequired
  }

  renderRecipe(recipe, index) {
    return (
      <RecipeItem
        key={index}
        updateRecipe={this.props.updateRecipe}
        {...recipe}
      />
    )
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
