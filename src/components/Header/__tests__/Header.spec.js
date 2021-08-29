import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from '../Header';
import store from '../../../store/store';

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Header />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
