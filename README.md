
# hotdamn

Zero-configuration webpack CLI with support for ES2015, React, HMR, and loaders for CSS, HTML, Markdown, fonts, and image files


## Usage

### 1. Install

```
npm i -D hotdamn
```

For use within a package, install as a dev dependency with the `-D` flag.
**Note: There's no need to install React, webpack, or Babel when using npm 3.**

### 2. Add run scripts

Add run scripts to your `package.json`. The dev flag runs webpack-dev-server.

```json
"scripts": {
  "start": "hotdamn entry.js --dev",
  "build": "hotdamn entry.js"
}
```

### 3. Create entry file

Create an `entry.js` file.

**Example:**
```js
import React from 'react'
import ReactDOM from 'react-dom'

const div = document.getElementById('app')

class App extends React.Component {
  render () {
    <div>
      <h1>Hotdamn!</h1>
    </div>
  }
}

ReactDOM.render(<App />, div)
```

### 4. Run

```
npm start
```

## Options

- `-o`, `--output` - specify the output file to compile to. Defaults to `bundle.js`
- `-D`, `--dev` - start webpack-dev-server
- `-i`, `--index` - specify and index file for webpack-dev-server `historyApiFallback` option

MIT License
