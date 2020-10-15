import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/statusbar.css';
import { Statusbar } from '../.';

const App = () => {
  return (
    <div>
      <Statusbar>hello world</Statusbar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
