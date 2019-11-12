import React from 'react';

import Dashboard from './Dashboard';
import { render } from 'react-testing-library';


test('Dashboard Component Renders Correctly', () => {
    render(<Dashboard />)
})

 
test('Gate defaults to unlocked and open', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i)
 })

 test('dashboard is showing both the display and control panel', () => {
     const { getByTestId } = render(<Dashboard />);
     getByTestId(/display-panel/i);
 })
 