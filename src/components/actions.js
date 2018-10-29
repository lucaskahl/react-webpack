import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => (
    <div className='git__actions'>
        <button onClick={getRepos}>Ver repositórios</button>
        <button onClick={getStarred}>ver favoritos</button>
    </div>

)

Actions.PropTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default Actions