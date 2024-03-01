import * as React from "react"
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { screen } from "shadow-dom-testing-library"
import App from './App'

describe('App', () => {
  it('renders the App component', async () => {
    render(<App />)

    const input = screen.getByTestId("input")
    expect(input.value).toEqual("blah")
    // screen.debug(); // prints out the jsx in the App component unto the command line
  })
})
