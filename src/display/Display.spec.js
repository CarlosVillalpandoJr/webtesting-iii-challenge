// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Display from './Display'


test('Display Component Renders Correctly', () => {
    render(<Display />)
})

test('display shows both lock/unlock and open/close buttons', () => {
    const { getByTestId } = render(<Display />);
    // getByTestId(/open-close-button/i)
    getByTestId(/lock-unlock-button/i)
})