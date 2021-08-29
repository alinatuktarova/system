import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import DropDownMenu from '../DropDownMenu';

it('DropDownMenu renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <DropDownMenu />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
