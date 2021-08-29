import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Authorization from '../Authorization';
import store from '../../../store/store';

it('Authorization renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Authorization />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
