import React from 'react';
import ReactDOM from 'react-dom';
import Authorization from '../Authorization';

it('Authorization renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Authorization />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
