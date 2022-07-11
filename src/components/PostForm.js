import React, { useState } from 'react'

import { postFetch } from './FetchMethods'

const PostForm = ({ refetch }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const clearForm = () => {
    setName('')
    setDescription('')
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (name === '' || description === '') {
        clearForm()
        return
      }
      postFetch('contents/', {
        name: name,
        description: description,
      }).then((response) => {
        clearForm()
        refetch()
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-2' style={{ minWidth: '100%' }}>
      <h2>Crear contenido</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            value={name}
            className='form-control mb-2'
            placeholder='Nombre del contenido'
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            value={description}
            className='form-control mb-2'
            placeholder='Descripcion del contenido'
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </div>
        <button className='btn btn-primary m-2 align-self-center' type='submit'>
          Crear
        </button>
      </form>
    </div>
  )
}
export default PostForm
