import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(<LikeButton liked={false} onChange={toggleLike} />)

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).toHaveTagName('p')
    expect(button).toHaveClassName('like')
  })

  describe('clicking the button', () => {
    it('calls "onChange"', () => {
      button.find('button').simulate('click')
      expect(toggleLike.callCount).toBe(1)
    })
  })
})
