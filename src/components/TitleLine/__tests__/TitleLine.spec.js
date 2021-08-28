import React from 'react';
import ReactDOM from 'react-dom';
import TitleLine from '../TitleLine';

it('TitleLine renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TitleLine />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
