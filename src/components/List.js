
const List = (props) => {
    const { contents } = props;
    if (!contents || contents.length === 0) return <h1>No hay conteido</h1>

    return (
        <ul>
            <h2>Lista de contenidos</h2>
            { contents.map((content) => {
                return (
                <li key={content.id} class="List-Format">
                    <span>ID: {content.id} - </span>
                    <span>Nombre: {content.name}</span>
                </li>
                );
            })}    
        </ul>
    );   
};

export default List;