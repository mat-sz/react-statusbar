import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/statusbar.css';
import * as Statusbar from '../';

const App = () => {
  return (
    <div>
      <Statusbar.Statusbar
        left={
          <>
            <Statusbar.Button onClick={() => alert('test')}>
              Hello world
            </Statusbar.Button>
            <Statusbar.Dropdown
              options={[
                {
                  key: 'test',
                  label: 'Test',
                  onClick: () => alert('test')
                },
                {
                  key: 'test2',
                  label: 'Test 2',
                  onClick: () => alert('test 2')
                }
              ]}
            >
              Dropdown
            </Statusbar.Dropdown>
          </>
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
