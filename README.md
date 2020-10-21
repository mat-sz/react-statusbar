# react-statusbar

A simple React library for beautiful statusbars.

# Usage

Install [react-statusbar](https://npmjs.com/package/react-statusbar) from NPM, using your favorite package manager:

```sh
yarn add react-statusbar
# or...
npm install react-statusbar
```

And you can now add the statusbar to your project using:

```tsx
import 'react-statusbar/dist/statusbar.css';
import * as Statusbar from 'react-statusbar';

<Statusbar.Statusbar
  left={<Statusbar.Button>Hello world</Statusbar.Button>}
  right={<span>Hello!</span>}
/>;
```
