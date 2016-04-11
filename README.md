
# hotdamn

Zero-configuration webpack CLI with support for ES2015, React, HMR, and loaders for CSS, HTML, Markdown, fonts, and image files


## Usage

### 1. Install

```
npm i hotdamn
```

For general command line use, install with the `-g` flag. For use within a package, install as a dev dependency with the `-D` flag. **Note: There's no need to install React, webpack, or Babel**

### 2. Create entry

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

### 3. Run

Run `hotdamn entry.js` to compile to `bundle.js`.
**For the dev server:** Run `hotdamn entry.js --dev`.

## Options

- `-o`, `--output` - specify the output file to compile to. Defaults to `bundle.js`
- `-D`, `--dev` - start webpack-dev-server
- `-i`, `--index` - specify and index file for webpack-dev-server `historyApiFallback` option

MIT License
