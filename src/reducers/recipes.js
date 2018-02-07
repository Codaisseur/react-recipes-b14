// src/reducers/recipes.js
import { SEED_RECIPES } from '../actions/types'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SEED_RECIPES :
      return payload

    default :
      return state
  }
}
