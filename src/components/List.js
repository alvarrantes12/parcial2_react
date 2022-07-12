import React from "react";

const List = (props) => {
    const { contents, nam1 } = props;
    if (!contents || contents.length === 0) return <h1>There is nothing</h1>

    return (
        <ul>
            <h2>{nam1}</h2>


            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Content</th>
                       
                    </tr>
                    {contents.map((content) => {
                        return (
                            <tr>
                                <td>{content.id}</td>
                                <td>{content.name}</td>
                    
                            </tr>
                        )
                    })}
                </table>

            </div>
        </ul>
    );

}
export default List;