import React, { useState } from 'react'

export const ControlledForm = () => {
  const [name, setName] = useState('')

  return (
    <form>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          className='form-control'
          name='name'
          id='name'
          aria-describedby='name'
          placeholder='Name'
        />
        <small id='name' className='form-text text-muted'>
          Enter your first name
        </small>
      </div>
      <input
        name=''
        id=''
        className='btn btn-primary'
        type='button'
        onClick={(e) => {
          alert(`thank you ${name} for your submission!`)
          e.preventDefault()
        }}
        value='Submit'
      />
    </form>
  )
}
