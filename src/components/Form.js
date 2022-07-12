import React, { useState, useEffect} from 'react';
import { postFetch } from './Methods';
import List from './List';
import { getFetch } from './Methods';
import IsLoading from './IsLoading';

function Form() {
        
    const[name, setName] = useState("");
    const[description, setDescription] =useState("");
    const LoadingList = IsLoading(List);
    const[appStateLoading, setAppStateLoading] = useState(false)
    const[appStateObject, setAppStateObject] = useState(null)
    const[refresh, setRefresh] = useState(true);

    useEffect(() => {
        if(refresh){
            setAppStateLoading(true);
            getFetch("contents").then(val => setAppStateObject(val))        
            setAppStateLoading(false);
            setRefresh(false);
          }
        }, [setAppStateObject, setAppStateLoading,refresh])


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
            placeholder= "Inserte el nombre"
            onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input 
            type= "text"
            value={description}
            placeholder= "Inserte la descripcion"
            onChange={(e) => setDescription(e.target.value)}
            />
            <br/>
            <button type="submit" color='#F09D51'>Crear</button>            
            </form>
        
    );

}

export default Form;