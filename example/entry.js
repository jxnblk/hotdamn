
import React from 'react'
import ReactDOM from 'react-dom'
import readme from '../README.md'
import 'basscss-basic/index.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      title: 'Hello!'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    const { title } = this.state

    const sx = {
      root: {
        padding: 48,
        maxWidth: 768
      }
    }

    return (
      <div style={sx.root}>
        <h2>{title}</h2>
        <input name='title'
          value={title}
          onChange={this.handleChange} />
        <div dangerouslySetInnerHTML={{ __html: readme }} />
      </div>
    )
  }
}

const div = document.getElementById('app')
ReactDOM.render(<App />, div)

