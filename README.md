# react-font-size-resizer

> This package adds buttons that allow you to modify the font size of the entire html React App

[![NPM](https://img.shields.io/npm/v/react-font-size-resizer.svg)](https://www.npmjs.com/package/react-font-size-resizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-font-size-resizer
```

## Usage

```jsx
import React, { Component } from "react";

import SwitchTextSize from "react-font-size-resizer";

class Example extends Component {
  render() {
    return <SwitchTextSize />;
  }
}
```

## Props

```jsx
<SwitchTextSize
  default={100} // numerical default font size value
  step={20} // numerical quantity that increases / decreases
  min={60} // numerical min font size value
  max={180} // numerical max font size value
  suffix={"%"} // string suffix property font-size css
  store={localStorage} // object store to save current font size value
  storeKey="SwitchTextSize" // string of store key
/>
```

## Live Demo

[https://fcabanasm.github.io/react-font-size-resizer](https://fcabanasm.github.io/react-font-size-resizer)

## License

MIT © [fcabanasm](https://github.com/fcabanasm)
