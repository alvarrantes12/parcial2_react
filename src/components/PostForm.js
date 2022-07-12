import React, { useState } from 'react'
import { postFetch } from './FetchMethods'

const PostForm = ({ refetch }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [message1, setMessage1] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      postFetch('contents/', {
        name: name,
        description: description,
      }).then((response) => {
        setName('')
        setDescription('')
        setMessage1('Creado correctamente')
        refetch()
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-4'>
      <h2>Crear Contenido</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Nombre del contenido"
          onChange={(e) => setName(e.target.value)}
          style={{ width: "400px" }}
        />
        <input
          type="text"
          value={description}
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "400px" }}
        />
        <div>{message1 ? <p>{message1}</p> : null}</div>
        <button type="submit" className="Button-Create">Crear</button>
      </form>
    </div>
  )

}
export default PostForm