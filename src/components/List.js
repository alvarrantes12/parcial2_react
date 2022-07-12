import React from "react";

const List = (props)=>{
    const{contents} = props;
    if (!contents || contents.length === 0)return <h1>Loading Error</h1>
    return (
        <ul>
            <h2>List</h2>
            {contents.map((content)=> {
                return (
                    <div style={{margin: "20px"}}>
                        <li key={content.id}>
                            <span><b>  Id: </b> {content.id}</span>
                            <span><b>  Name : </b> {content.name}</span>
                            <span><b>  Description: </b> {content.description}</span>
                        </li>
                    </div>
                    
                );
            })}
        </ul>
    );
}
export default List;