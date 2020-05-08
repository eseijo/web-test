import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Contact from '.';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders', () => {
    act(() => {
        render(<Contact />, container);
    });
    expect(container.querySelector('h3').textContent).toBe('¡Sígueme y no dudes en contactar conmigo!');
});