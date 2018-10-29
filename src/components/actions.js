import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
    <div className='git__actions'>
        <button onClick={getRepos}>Ver repositórios</button>
        <button onClick={getStarred}>ver favoritos</button>
    </div>

)

export default Actions