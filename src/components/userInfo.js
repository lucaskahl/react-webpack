import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
    <div className='git__user-info'>
        <img src={userinfo.photo} />
        <h1>
            <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
        </h1>
        <ul className='git__repos-info'>
            <li>Repositórios: {userinfo.repos}</li>
            <li>Followeres: {userinfo.followers}</li>
            <li>Following: {userinfo.following}</li>
        </ul>
    </div>
)

UserInfo.PropTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isrequired,
        photo: PropTypes.string.isrequired,
        login: PropTypes.string.isrequired,
        repos: PropTypes.number.isrequired,
        followers: PropTypes.string.isrequired,
        following: PropTypes.string.isrequired
    })
}

export default UserInfo