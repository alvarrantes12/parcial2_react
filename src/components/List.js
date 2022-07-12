import React from "react";

const List = (props) => {
    const {contents} = props;

    if (!contents || contents.lenght === 0) return <h1>No hay contenido</h1>

    return (
        <ul>
            <h2>Estos son los usuarios disponibles</h2>
            {contents.map((content) => {
                return (
                    <li key={content.id}>
                        <span>{content.id} <b>Nombre: </b>{content.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}
export default List;