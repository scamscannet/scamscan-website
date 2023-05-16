import React from 'react'
import Form from './form'
import { getDictionary } from '@/get-dictionary'



describe('<Form />', async () => {
  const dictionary = await getDictionary('de')
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Form lang='de' dictionary={dictionary.formLogin} type='login' />)
  })
})