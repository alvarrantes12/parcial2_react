import React from "react";
const List = (props) => {
    const {contents} = props;
    if (!contents || contents.length === 0) return <h1>No hay contenido</h1>
    return (
        <ul>
            <h2 className="Second-Title">Estas son los contenidos disponibles</h2>
            <table>
                <tr>
                    <th>Identificador</th>
                    <th>Nombre</th>
                </tr>
                <tr>
                    <td>
                    {contents.map((content) => {
                        return (
                            <div >
                                <span className="Component-Title">{content.id}</span>    
                            </div>
                        );
                    })}
                    </td>
                    <td>
                    {contents.map((content) => {
                        return (
                            <div >
                                <span className="Component-Title">{content.name}</span>    
                            </div>
                        );
                    })}
                    </td>
                </tr>  
            </table>
        </ul>

        
    );
};

export default List;