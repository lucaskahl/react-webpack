'use strict'

import React, { Component } from 'react'


class App extends Component {

  constructor() {
    super()
    this.state = {
      value: 'Initial value',
      checked: false
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' value={ this.state.value } onChange={(e) => {
            console.log(e.target.value);
            this.setState({
              value: e.target.value
            })
          }} />

          <label>
            <input type='checkbox' checked={this.state.checked} onChange={(e) => {
              this.setState({
                checked: !this.state.checked // e.target.checked
              })
            }}/>
            Checkbox
          </label>

          <input type='radio' name='rd' value='1' />Radio 1
          <input type='radio' name='rd' value='2' />Radio 2

        </form>
    </div>
    )
  }
}

export default App
