import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/statusbar.css';
import * as Statusbar from '../';

const App = () => {
  return (
    <div>
      <Statusbar.Statusbar>
        <Statusbar.Item align="left">Hello</Statusbar.Item>
        <Statusbar.Item align="left">Hello</Statusbar.Item>
        <Statusbar.Item align="right">Hello</Statusbar.Item>
      </Statusbar.Statusbar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
