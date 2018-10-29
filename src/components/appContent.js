'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred, handleSearch, getRepos, getStarred}) => (
    <div className='app'>
        <Search handleSearch={handleSearch}/>  
        <div className='teste'>
          <section className='git__user'>
            {!!userinfo && <UserInfo userinfo={userinfo}/>}
              {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}
              
              {!!repos.length && 
                <Repos
                  className='git__repos'
                  title='Repositórios:'
                  repos={repos}
                  />
                }

              {!!starred.length && 
                <Repos
                  className='git__starred'
                  title='Favoritos:'
                  repos={starred}
                />
            }
          </section>
      </div>
    </div>
)

AppContent.PropTypes = {
  userinfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired
}

export default AppContent