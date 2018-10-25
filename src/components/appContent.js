'use strict'

import React from 'react'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred}) => (
    <div className='app'>
        <Search />  
        <div className='teste'>
          <section className='git__user'>
            {!!userinfo && <UserInfo userinfo={userinfo}/>}
              {!!userinfo && <Actions />}
              
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
  userinfo: React.PropTypes.object.isrequired,
  repos: React.PropTypes.array.isrequired,
  starred: React.PropTypes.array.isrequired
}

export default AppContent