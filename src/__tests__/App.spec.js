import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import store from '../store/store';
import App from '../App';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </HashRouter>
      </Provider>,
      div,
    );
  })
  ReactDOM.unmountComponentAtNode(div);
});
