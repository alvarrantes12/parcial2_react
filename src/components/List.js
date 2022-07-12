import React from "react";

const List = (props) => {
    const {contents} = props;

    if (!contents || contents.lenght === 0) return <h1>No hay datos</h1>

    return (
        <ul>
            {contents.map((content) => {
                return (
					<div className="div-list">
                  	  <li key={content.id}>
                      	  <span className="Component-Title"> <b>Nombre: </b>{content.name} {content.nameContent}
						  <b> | Descripcion: </b>{content.description}  {content.descriptionContent}</span>
                    	</li>
					</div>
                )
            })}
        </ul>
    )
}
export default List;