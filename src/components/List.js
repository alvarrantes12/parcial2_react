import React from "react";

const List = (props) => {
  const {contents} = props;

  if(!contents || contents.length === 0) return <h1>No hay contenido</h1>

  return (
    <ul>
      <h2> Estos son los contenidos disponibles</h2>
      {contents.map((content) =>{
        return (
          <div style={{ margin: "20px"}} >
              <li key={content.id}> 
                <span className= "Data-Id"> <b>Id:</b> {content.id} <b className= "Data-Separator"> | </b></span>
                <span className= "Data-ProductName"> <b>Nombre:</b> {content.name} <b className= "Data-Separator"> | </b></span>
                <span className= "Data-Price"> <b>Descripcion:</b> {content.description} <b className= "Data-Separator"> | </b></span>
              </li>
          </div>
        );
      })}
    </ul>
  );
};
export default List;