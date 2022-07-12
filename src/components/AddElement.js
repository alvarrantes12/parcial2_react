import { useState } from "react";
import { postFetch } from "./FetchMethods";

function AddElement({sendRefresh}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            postFetch("contents", {name: name, description: description});
            sendRefresh();
            setName("");
            setDescription("");
            
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={name}
                    placeholder="Nombre"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    value={description}
                    placeholder="Descripción"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default AddElement;