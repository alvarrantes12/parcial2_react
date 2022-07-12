import React from "react";

const List = (props) => {
    const { contents } = props;

    if(!contents || contents.length === 0) return <h1>No existe contenido</h1>

    return(
        <ul>
        <h2> Este es el contenido disponible </h2>
        {contents.map((content) => {
            return (
                <div style={{background: "wheat", margin: "10px"}}>
                    <li key={content.id}>
                        <span ><b>id:</b> {content.id}</span>
                        <span ><b> name:</b> {content.name}</span>
                        <span> <b>descripcion:</b> {content.description}</span>
                    </li>
                </div>

            );
        })}
        </ul>
    );
};

export default List;