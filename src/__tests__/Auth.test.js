import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Auth } from '../Components/Auth'

describe('TestAuth', () => {
  let component;
  beforeEach(() => {
    component = render(<Auth />)
  })

  test('Validate text welcome', () => {
    component.getByText(/Welcome/)
  })
})