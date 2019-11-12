// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Display from './Display'


test('Display Component Renders Correctly', () => {
    render(<Display />)
})

test('display shows both lock/unlock and open/close buttons', () => {
    const { getByTestId } = render(<Display />);
    getByTestId(/open-close-button/i)
    getByTestId(/lock-unlock-button/i)
})

test('displays Closed if the closed prop is true', () => {
    const { getByText } = render(<Display closed={true} />)
    getByText(/closed/i)
})

test('displays Open if the open prop is true', () => {
    const { getByText } = render(<Display open={true} />)
    getByText(/open/i)
})

test('displays Locked if the locked prop is true', () => {
    const { getByText } = render(<Display locked={true} />)
    getByText(/locked/i)
})

test('displays Unlocked if the locked prop is false', () => {
    const { getByText } = render(<Display locked={false} />)
    getByText(/unlocked/i)
})

test('when locked use the red class', () => {
    const { getByTestId } = render(<Display locked={true} />)
    expect(getByTestId(/lock-unlock-button/i).classList.contains('red-led')).toBe(true);
})

test('when unlocked lock display uses green class', () => {
    const { getByTestId } = render(<Display locked={false} />)
    expect(getByTestId(/lock-unlock-button/i).classList.contains('green-led')).toBe(true);
})