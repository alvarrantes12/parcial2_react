import React from "react";

const List = (props) => {
    const {contents} = props;

    if (!contents || contents.length === 0) return <h1>No hay contenidos</h1>

    return (
        <ul>
            <h2>Estos son los contenidos disponibles</h2>
            {contents.map((content) => {
                return (
                    <div>
                        <li key={content.id}>
                            <span><b>ID:</b> {content.id} </span>
                            <span><b> Nombre:</b> {content.name} </span>                            
                        </li>
                    </div>
                );
            })}
        </ul>
    );
};
export default List;