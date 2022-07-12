import React, { useState} from 'react';
import { postFetch } from './FetchMethods';


function Form() {
        
    const[name, setName] = useState("");
    const[description, setDescription] =useState("");

        const handleSubmit = async (e) =>{
            e.preventDefault();
            try {
              postFetch("contents", {name: name, description: description}).then(() => {
                setName("");
                setDescription("");
              });
            } catch (err) {
                console.log(err)
            }
          }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type= "text"
            value={name}
            placeholder= "Agregue el nombre"
            onChangeCapture={(e) => setName(e.target.value)}
            />
       
            <input 
            type= "text"
            value={description}
            placeholder= "Agregue la descripción"
            onChange={(e) => setDescription(e.target.value)}
            />
            <br/>
            <button type="submit" onClick={handleSubmit}>Crear</button>
        </form>
    );

}

export default Form;