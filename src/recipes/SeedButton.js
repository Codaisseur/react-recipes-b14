import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SEED_RECIPES } from '../actions/types'
import seeds from '../fixtures/recipes'

class SeedButton extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.dispatch({
      type: SEED_RECIPES,
      payload: seeds
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Seed Recipes
      </button>
    )
  }
}

export default connect()(SeedButton)
