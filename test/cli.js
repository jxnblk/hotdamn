
import path from 'path'
import { spawn } from 'child_process'
import expect from 'expect'

describe('hotdamn', () => {
  const cli = path.join(__dirname, '..', 'bin', 'hotdamn.js')

  it('should not throw', (done) => {
    expect(() => {
      const process = spawn(cli, [
        'test/entry.js',
        '-o',
        'test/test-bundle.js'
      ])
      done()
    }).toNotThrow()
  })

  it('should log details', (done) => {
    // To do: figure out how to test this
    done()
  })

})
