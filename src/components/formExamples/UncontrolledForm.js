import React from 'react'

export const UncontrolledForm = () => {
  const dog = React.createRef()
  const guardian = React.createRef()
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='name'> Dog's Name</label>
        <input
          ref={dog}
          type='text'
          className='form-control'
          name='dog'
          id='name'
          aria-describedby='helpId'
          placeholder='dog'
        />
        <input
          ref={guardian}
          type='text'
          className='form-control'
          name='guardian'
          id='guardian'
          aria-describedby='helpId'
          placeholder='guardian'
        />
        <button
          onClick={(e) => {
            console.log(dog)
            alert(`${dog.current.value} is ${guardian.current.value}'s baby!`)
            e.preventDefault()
          }}
          name=''
          id=''
          className='btn btn-primary'
        >
          Submit
        </button>
      </div>
    </form>
  )
}
