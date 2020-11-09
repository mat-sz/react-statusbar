import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/statusbar.css';
import * as Statusbar from '../';
import { FaCheck } from 'react-icons/fa';

const App = () => {
  return (
    <div>
      <Statusbar.Statusbar
        left={
          <>
            <Statusbar.Button onClick={() => alert('test')}>
              Button
            </Statusbar.Button>
            <Statusbar.Label>
              <FaCheck /> Hello, world!
            </Statusbar.Label>
            <Statusbar.Dropdown
              options={[
                {
                  key: 'test',
                  label: 'Test',
                  onClick: () => alert('test')
                },
                {
                  key: 'separator-test',
                  type: 'separator'
                },
                {
                  key: 'test2',
                  label: 'Test 2',
                  onClick: () => alert('test 2')
                }
              ]}
            >
              <FaCheck /> Dropdown
            </Statusbar.Dropdown>
            <Statusbar.Dropdown
              options={new Array(100).fill(undefined).map((_, i) => ({
                key: 'test' + i,
                label: 'Test ' + i,
                onClick: () => alert('test ' + i)
              }))}
            >
              Huge dropdown
            </Statusbar.Dropdown>
            <Statusbar.Progress value={40} max={100} />
            <Statusbar.Progress
              label={
                <>
                  <FaCheck /> Hello, world!
                </>
              }
            />
          </>
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
