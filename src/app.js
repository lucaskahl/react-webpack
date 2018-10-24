'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='app__search'>
      <input type='search' placeholder='Digite o nome do usuario'/>
    </div>
    
    <article className='git__user'>
      <div className='git__user-info'>
        <img src='https://avatars1.githubusercontent.com/u/36921642?v=4' />
        <h1>
          <a href='https://github.com/lucaskahl'>Lucas Kahl</a>
        </h1>

        <ul className='git_repos-info'>
          <li>Repositórios: 12</li>
          <li>Followeres: 0</li>
          <li>Following: 0</li>
        </ul>

        <div className='git__actions'>
          <button>Ver repositórios</button>
          <button>ver favoritos</button>
        </div>

        <div className='git__repos'>
          <ul>
            <h2>Repositórios: </h2>
              <li><a href='#'>Nome do repositório</a></li>
          </ul>
        </div>

        <div className='git__starred'>
          <h2>Favoritos:</h2>
          <ul>
            <li><a href='#'>Nomee do repositório</a></li>
          </ul>
        </div>
      </div>
    </article>

  </div>
)

export default App
