import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Board from './Board';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders board correctly', () => {
  const squares = Array(9).fill('X');
  const onClick = jest.fn();
  act(() => {
    render(<Board squares={squares} onClick={onClick} />, container);
  });

  const buttons = document.querySelectorAll('[data-testid=square-button]');
  buttons.forEach((button) => expect(button.innerHTML).toBe('X'));
});

it('board buttons work', () => {
  const squares = Array(9).fill('X');
  const onClick = jest.fn();
  act(() => {
    render(<Board squares={squares} onClick={onClick} />, container);
  });

  const buttons = document.querySelectorAll('[data-testid=square-button]');
  buttons.forEach((button) => button.dispatchEvent(new MouseEvent('click', { bubbles: true })));
  expect(onClick).toHaveBeenCalledTimes(9);
});
