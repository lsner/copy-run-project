import { renderApp } from '../../utilities';
import { App } from './app';

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp(App)
  });
}
