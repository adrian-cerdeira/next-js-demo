import React from 'react'
import Home from './index'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
  })

  it('should render and display expected content', () => {
    cy.mount(<Home />)
    
    // h1 should have Welcome
    cy.get('h1').contains('Welcome');
  })
})