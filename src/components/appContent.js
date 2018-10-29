'use strict'

import React, { PropTypes }  from 'react'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching}) => (
    <div className='app'>
        <Search isDisabled={isFetching} handleSearch={handleSearch}/>  
        {isFetching && <div>Carregando...</div>}
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
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default AppContent