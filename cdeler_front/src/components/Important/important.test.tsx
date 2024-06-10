import React from 'react';
import { render, screen } from '@testing-library/react';
import Important from './Important';

describe('Important component', () => {
  test('renders important information section correctly', () => {
    render(<Important />);

    const importantSection = screen.getByTestId('important-section');
    expect(importantSection).toBeInTheDocument();

    const importantTitle = screen.getByText('Important Information');
    expect(importantTitle).toBeInTheDocument();

    const importantTexts = screen.getAllByTestId('important-text');
    expect(importantTexts).toHaveLength(3);
    importantTexts.forEach((text) => {
      expect(text).toBeInTheDocument();
    });
  });

  test('renders additional information section correctly', () => {
    render(<Important />);

    const additionalSection = screen.getByTestId('additional-section');
    expect(additionalSection).toBeInTheDocument();

    const additionalTitle = screen.getByText('Additional Information');
    expect(additionalTitle).toBeInTheDocument();

    const additionalTexts = screen.getAllByTestId('additional-text');
    expect(additionalTexts).toHaveLength(3); 
    additionalTexts.forEach((text) => {
      expect(text).toBeInTheDocument();
    });
  });
});
