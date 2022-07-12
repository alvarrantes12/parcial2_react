import React from "react";

const List = (props) => {
    const {contents} = props;
    const {special_contents} = props;

    if (!contents || contents.length === 0) return <h1 className="No-Contents">No hay contenidos</h1>

    return (
        <ul>
            <h2 className="Component-Title">Estos son los contenidos disponibles</h2>
            {contents.map((content) => {
                return(
                    <div style={{border: "15px groove green"}}>
                        <li key={content.id}>
                            <span className="Component-Title"><b >Nombre: </b>{content.id}. {content.name}</span>
                        </li>
                    </div>
                    
                );
            })}


        </ul>
    );

};

const List2 = (props) => {
    const {special_contents} = props;

    if (!special_contents || special_contents.length === 0) return <h1 className="No-Contents">No hay contenidos</h1>

    return (
        <ul>
            <h2 className="Component-Title">Estos son los contenidos disponibles</h2>
            {special_contents.map((special_content) => {
                return(
                    <div style={{border: "15px groove green"}}>
                        <li key={special_content.id}>
                            <span className="Component-Title"><b >Nombre: </b>{special_content.id}. {special_content.name}</span>
                        </li>
                    </div>
                    
                );
            })}


        </ul>
    );

};
export default List;