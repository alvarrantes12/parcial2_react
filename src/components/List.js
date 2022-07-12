import React from "react";

const List = (props) => {
    const { contents } = props;
    const { special_contents } = props;

    if (!contents || contents.lenght === 0) return <h1>No hay contenidos</h1>

    return (
        <ul>
            <h2 className="Component-Title">Estos contenidos están disponibles: </h2>
            {contents.map((content) => {
                return (
                    <div>
                        <li key={content.id}>
                            <span><b>ID: </b> {content.id} </span>
                            <br></br>
                            <span><b>Nombre: </b> {content.name}</span>
                            <br></br>
                            <span><b>Descripción: </b> {content.description}</span>
                            <br></br>
                            <br></br>
                        </li>
                    </div>
                );
            })}
            
        </ul>
    );
    
};
export default List;