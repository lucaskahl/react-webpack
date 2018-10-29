'use strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => (
    <div className='git__search'>
        <input 
        className='git__search-input'
        type='search'
        placeholder='Digite o nome do usuario'
        disabled={isDisabled}
        onKeyUp={handleSearch}
        />
    </div>
)

Search.PropTypes = {
    handleSearch: React.PropTypes.func.isRequired,
    isDisabled: React.PropTypes.bool.isRequired
}

export default Search