import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Error } from '../Widgets/Error';

describe('TestAuth', () => {
  let component;
  beforeEach(() => {
    component = render(<Error />)
  })

  test('Validate text error', () => {
    component.getByText(/Please try again later/i)
  })

})