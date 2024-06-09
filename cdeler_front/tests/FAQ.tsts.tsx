import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FAQpage from '../src/pages/faqPage';

const texts = {
  faq: {
    title: "FAQ",
    questions: [
      { question: "What is your return policy?", answer: "Our return policy is..." },
      { question: "How do I track my order?", answer: "You can track your order by..." },
      { question: "Can I purchase items again?", answer: "Yes, you can purchase items again..." }
    ]
  }
};

describe('FAQ Component', () => {
  test('renders FAQ title', () => {
    render(<FAQpage texts={texts} />);
    const titleElement = screen.getByText(/Frequently Asked Questions/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders FAQ questions and answers', () => {
    render(<FAQpage texts={texts} />);
    texts.faq.questions.forEach(({ question, answer }) => {
      const questionElement = screen.getByText(question);
      const answerElement = screen.getByText(answer);
      expect(questionElement).toBeInTheDocument();
      expect(answerElement).toBeInTheDocument();
    });
  });
});