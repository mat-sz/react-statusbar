import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/statusbar.css';
import { Statusbar } from '../.';

const App = () => {
  return (
    <div>
      <Statusbar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
