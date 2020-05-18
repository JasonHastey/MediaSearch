import React from 'react'

export const Search = () => {

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Search" />
            <button >Submit</button>
          </form>
        </div>
    )
}
