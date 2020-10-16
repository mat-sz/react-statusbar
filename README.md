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

<Statusbar.Statusbar>
  <Statusbar.Item align="left">Hello</Statusbar.Item>
  <Statusbar.Item align="left">Hello</Statusbar.Item>
  <Statusbar.Item align="right">Hello</Statusbar.Item>
</Statusbar.Statusbar>;
```

**Only Statusbar.Item is accepted as a child of Statusbar.Statusbar.**
