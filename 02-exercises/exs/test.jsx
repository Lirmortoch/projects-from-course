import React from 'react';

import App, { MainGoal } from '../src/App.js';
import { render, screen, cleanup } from '@testing-library/react';
import {describe, afterEach, test} from 'mocha'
import { expect } from 'chai';


describe('Application', () => {
  afterEach(() => {
      cleanup();
  });
    
  test('renders App component successfully', () => {
    render(<App />);
    expect(screen.getAllByText('Time to Practice!').length).not.toBe(0);
  });
  
  test('outputs MainGoal component with the text "My main goal" successfully inside of the App component', () => {
    render(<App />);
    const mainGoalElements = screen.getAllByText(/my main goal/i);
    expect(mainGoalElements.length).toBeGreaterThan(2);
  });

  
});