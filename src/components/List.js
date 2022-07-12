import React from "react";

const List = (props) => {
    const { contents } = props;

    if (!contents || contents.length === 0) return <h1>No hay nada que mostrar</h1>


    return (
        <ul>
            <h2 className="Component-Title">Contenidos: </h2>
            {contents.map((content) => {
                return (
                    <div style={{background: "yellow", margin: "10px"}}>
                        <li key={content.id}>
                            <span classname="Component-Title">{content.id}<b>Nombre</b> {content.name} <b> {content.description}</b></span>
                        </li>
                    </div>
                );
                })}
            <h2 className="Component-Title">Contenidos: </h2>
            {contents.map((special_content) => {
                return (
                    <div style={{background: "yellow", margin: "10px"}}>
                        <li key={special_content.id}>
                            <span classname="Component-Title">{special_content.id}<b>Nombre</b> {special_content.name} <b> {special_content.description}</b></span>
                        </li>
                    </div>
                );
                })}
        </ul>
    );

};

export default List;