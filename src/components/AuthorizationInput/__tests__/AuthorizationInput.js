import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizationInput from '../AuthorizationInput';

it('AuthorizationInput renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AuthorizationInput />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
