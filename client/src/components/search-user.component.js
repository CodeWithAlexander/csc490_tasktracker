import React from 'react'

const SearchUser = ({searchUser,setSearchUser,handleSearch}) => {
  return (
      <>
    <form className="searchForm" onSubmit={(e) => handleSearch(e)}>
    <input
      className="search__input"
      type="text"
      placeholder="Search User"
      value={searchUser}
      onChange={(e) => setSearchUser(e.target.value)}
    />
  </form>
  </>
  )
}

export default SearchUser