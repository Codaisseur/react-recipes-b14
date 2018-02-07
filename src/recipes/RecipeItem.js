// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeCategory from './RecipeCategory'
import LikeButton from '../components/LikeButton'

export const recipeItemShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool
})

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class RecipeItem extends PureComponent {
  static propTypes = {
    ...recipeItemShape.isRequired,
    updateRecipe: PropTypes.func.isRequired
  }

  toggleLike = () => {
    console.log('Calling toggleLike inside RecipeItem!')
    const { updateRecipe, _id, liked } = this.props
    updateRecipe(_id, { liked: !liked })
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo, liked } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="RecipeItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          <Title content={title} className="level-2" />
          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>

        <div>
          <p>{ summary }</p>
        </div>
        <footer>
          <LikeButton
            onClick={this.toggleLike}
            liked={liked}
          />
        </footer>
      </article>
    )
  }
}

export default RecipeItem
