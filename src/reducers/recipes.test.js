// src/reducers/recipes.test.js

import recipes from './recipes'

describe('recipes reducer', () => {
  const reducer = recipes
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
