import React, { useState, useEffect } from "react";
import { getFetch, postFetch } from "./FetchMethods";

function Form() {

    const [message1, setMenssage1] = useState("");
    // const [refresh, setRefresh] = useState(true);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [appStateLoading, setAppStateLoading] = useState(false);
    const [appStateObject, setAppStateObject] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            postFetch("contents", { name: name, description: description }).then(() => {
                setName("");
                setDescription("");
                setMenssage1("Creado correctamente");
            });
        } catch (err) {
            console.log(err)
        }
    }

    const refresh = async (e) => {
        setAppStateLoading(true);
        getFetch("contents").then(val => setAppStateObject(val))
        setAppStateLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Insertar nuevo contenido</h2>
            <input
                type="text"
                value={name}
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)}
                style={{ width: "500px" }}
            />
            <input
                type="text"
                value={description}
                placeholder="Descripción"
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: "500px" }}
            />
            <div className="Component-Message">{message1 ? <p>{message1}</p> : null}</div>
            <button type="submit">Crear Contenido</button>
        </form>
    )
}

export default Form;


