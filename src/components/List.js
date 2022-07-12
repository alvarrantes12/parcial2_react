import React from "react";

const List = (props) => {
    const {values} = props
    if (!values|| values.length === 0) return <h1>No hay contenido</h1>
    return(
        <ul>
            {values.map((value) =>{
                return(
                    <div>
                        <span><b> Id: </b>{value.id}</span>
                        <span><b> Name:  </b>{value.name}</span>
                    </div>
                ); 
            })}
        </ul> 
    )
};

export default List;