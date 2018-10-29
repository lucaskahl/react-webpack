'use strict'

import React from 'react'


const Search = ({ handleSearch }) => (
    <div className='git__search'>
        <input 
        className='git__search-input'
        type='search'
        placeholder='Digite o nome do usuario'
        onKeyUp={handleSearch}
        />
    </div>
)

Search.PropTypes = {
    handleSearch: React.PropTypes.func.isRequired
}

export default Search