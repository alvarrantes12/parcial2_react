import React from "react";

const List = (props) => {
    const { contents } = props;

    if (!contents || contents.length === 0) return <h1>No hay contenido</h1>

    return (
        <ul>
            <h2 className="Componente-Title">Lista de contenido</h2>
            {contents.map((content) => {
                return (
                    <div style={{background: "white", margin: "0px"}}>
                        <li key={content.id}>
                            <span className="Component-Title"> {content.id} <b>Nombre del contenido:</b> {content.name}<b> Descripcion:</b> {content.description} </span>
                        </li>

                    </div>

                    

                );
            })}


        </ul>
    );
};




export default List;