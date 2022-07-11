import React from 'react'

const List = ({ contents }) => {
  if (!contents || contents.length === 0) return <h1>No hay contenido</h1>
  return (
    <div>
      {contents.map(({ id, name}) => (
        <div key={`${id}${name}`} className='card m-2' 
        style={{ minWidth: '30vw'}}
        >
          <div className='card-body'>
            <h5 className='card-title'>
              <b>Id: </b>
              <span>{id}</span>
            </h5>
            <span>
              <b>Nombre: </b>
              <span>{name}</span>
            </span>
            <br />
          </div>
        </div>
      ))}
    </div>
  )
}
export default List
