'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = ({ user }) => (
    <div className='git__search'>
        <input 
        className='git__search-input'
        type='search'
        placeholder='Digite o nome do usuario'
        onKeyUp={(e) => {
            const value = e.target.value
            const keyCode = e.which || e.keycode
            const ENTER = 13;

            if(keyCode == ENTER) {
                ajax().get(`https://api.github.com/users/${value}`)
                .then((result) => {
                    console.log(result)
                })
            }
            console.log(keyCode)
        }}
        />
    </div>
)

export default Search