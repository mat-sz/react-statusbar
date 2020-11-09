# react-statusbar

A simple React library for beautiful statusbars.

## Usage

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
  left={<Statusbar.Button>Hello, world!</Statusbar.Button>}
  right={<span>Hello!</span>}
/>;
```

## Available components

### Statusbar

The main statusbar component, it provides layout and CSS variables to other components.

```tsx
<Statusbar.Statusbar left={} right={} />
```

### Label

A basic text component.

```tsx
<Statusbar.Label>Hello, world!</Statusbar.Label>
```

### Button

A basic button component.

```tsx
<Statusbar.Button onClick={() => alert('Hello!')}>
  Hello, world!
</Statusbar.Button>
```

### Dropdown

A dropdown menu component.

```tsx
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
  Dropdown
</Statusbar.Dropdown>
```

### Progress

A progress bar component. If the `value` and `max` properties are undefined, this will show a marquee animation.

```tsx
<Statusbar.Progress value={40} max={100} />
```
