import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/statusbar.css';
import * as Statusbar from '../';

const App = () => {
  return (
    <div>
      <Statusbar.Statusbar
        left={<Statusbar.Button>Hello world</Statusbar.Button>}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
