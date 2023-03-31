import React from 'react'
import Navbar from './navbar'

describe('<Navbar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navbar />)
  })

  it('should render and display expected content', () => {
    cy.mount(<Navbar />)

    // Navbar should have navbar brand home
    cy.get('.navbar-brand').contains('Home');
  })
})