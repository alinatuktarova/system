import React from 'react';
import ReactDOM from 'react-dom';
import DropDownMenu from '../DropDownMenu';

it('DropDownMenu renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DropDownMenu />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
