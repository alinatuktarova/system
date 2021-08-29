import React from 'react';
import ReactDOM from 'react-dom';
// import { act } from 'react-dom/test-utils';
import {
  render, screen, fireEvent,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import AuthorizationInput from '../AuthorizationInput';

it('AuthorizationInput renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AuthorizationInput />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Authorization Input works correct', async () => {
  let testValue = '';
  const change = (e) => {
    testValue += e.target.value;
  }
  const { rerender } = render(
    <AuthorizationInput value={testValue} onChange={change} placeholder="testPlaceholder" />,
  );
  const testInput = screen.getByPlaceholderText('testPlaceholder');
  expect(testInput.value).toBe('');
  await userEvent.type(testInput, 'testLogin', { delay: 1 });
  rerender(
    <AuthorizationInput value={testValue} onChange={change} placeholder="testPlaceholder" />,
  );
  const testInputChanged = screen.getByPlaceholderText('testPlaceholder');
  expect(testInputChanged.value).toBe('testLogin');
})
