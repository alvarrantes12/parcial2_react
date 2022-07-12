import React from "react";

const List = (props) => {
    const {contents} = props;

    if (!contents || contents.length === 0) return <h1>No hay contenido para mostrar</h1>

    return(
        <ul> 
            {contents.map((content)=> {
                return (
                    <div style={{margin: "10px"}}>
                        <li key={content.id}>
                            <span className="Component-Title"><b className="Component-Attribute">ID :</b><b>{content.id}</b></span>
                            <br />
                            <span className="Component-Title"><b className="Component-Attribute">Nombre contenido :</b><b>{content.name}</b></span>
                        </li>
                    </div>
                );
            })}
        </ul>
    );

};
export default List;