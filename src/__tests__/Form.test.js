import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { FormClients } from '../Components/FormClients';

describe('TestAuth', () => {
  let component;
  beforeEach(() => {
    component = render(<FormClients />)
  })

  test('Validate placeholders input', () => {
    component.getByPlaceholderText('Add your firstName')
    component.getByPlaceholderText('Add your lastName')
    component.getByPlaceholderText('Add your cellphone')
    component.getByPlaceholderText('Add your address')
    component.getByPlaceholderText('Add your city')
  })

  test('Validate exists button', () => {
    const button = component.getByText(/Send/)
    expect(button).toBeInTheDocument()
  })
})