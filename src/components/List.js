import React from 'react'

const List = (props) => {
  const { contents } = props;

  if (!contents || contents.length === 0) return <h1>There is no content</h1>

  return (
    <ul>
      <h2>Available contents</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(({ id, name })=> {
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ul>
  );
}

export default List;