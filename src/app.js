'use strict'

import React, { Component } from 'react'

import AppContent from './components/appContent'

class App extends Component {

  constructor(){
    super()
    this.state = {
      userinfo: {
        username: 'Lucas Kahl',
        photo: 'https://avatars1.githubusercontent.com/u/36921642?v=4', 
        login: 'lucaskahl',
        repos: 12,
        followers: 10,
        following: 0
      },
      repos: [{
        name: 'RSJ',
        link: "#"
      }],
      starred: [{
        name: 'RSJ',
        link: "#"
      }]
    }
  }

  render() {
    return <AppContent 
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
