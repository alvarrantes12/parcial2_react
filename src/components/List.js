import React from "react";

const List = (props) => {
    const {contents} = props;

    if (!contents || contents.length === 0) return <h1>No hay contenidos</h1>

    return (
    <ul>
        <h2>Estas son los contenidos disponibles</h2>
        {contents.map((content) => {
            return (
                <header class="text">
                    <li key={content.id}>
                        <span>{content.id} <b>Nombre:</b> {content.name} | {content.nameContent} </span>
                        <span><b>Descripción:</b> {content.description} {content.descriptionContent}</span>
                        
                    </li>
                </header>
            )
                
        })}
    </ul>
    );
};
export default List;