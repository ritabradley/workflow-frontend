import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rita Bradley as name', () => {
    render(<App />);
    const name = screen.getByText(/Rita Bradley/i);
    expect(name).toBeInTheDocument();
});

test('renders a link to my Twitter', () => {
    render(<App />);
    const linkElement = screen.getByText(/My Twitter/i);
    expect(linkElement).toBeInTheDocument();
});
