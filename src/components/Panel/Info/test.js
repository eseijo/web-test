import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Info from '.';

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
        render(<Info />, container);
    });
    expect(container.querySelector('h4').textContent).toBe('¿En qué te puedo ayudar?');
});

it('shows personalized consultation by default and changes between sections', () => {
    act(() => {
        render(<Info />, container);
    });
    expect(container.querySelector('.image-tab.selected').id).toBe('personalized-consultation');
    expect(container.querySelector('.content').id).toBe('personalized-consultation-content');

    const workshopsTab = document.querySelector('#workshops');
    act(() => {
        workshopsTab.dispatchEvent(new MouseEvent('click'));
    });
    expect(container.querySelector('.image-tab.selected').id).toBe('workshops');
    expect(container.querySelector('.content').id).toBe('workshops-content');

    const colaborationsTab = document.querySelector('#colaborations');
    act(() => {
        colaborationsTab.dispatchEvent(new MouseEvent('click'));
    });
    expect(container.querySelector('.image-tab.selected').id).toBe('colaborations');
    expect(container.querySelector('.content').id).toBe('colaborations-content');
});
