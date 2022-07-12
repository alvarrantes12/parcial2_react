import { useState } from "react"
import {postFetch} from './UseApi.js'

const CreateComponent = () =>{
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [refresh, setRefresh] =useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            postFetch("contents",{name:name,description:description}).then(()=>{
                setName("");
                setDescription("");
                setRefresh(true);
            });
        }catch(err){
            console.log(err)
        }
        
    }
    
    return(
        <ul>
            <form onSubmit={handleSubmit}>
            <h2>Add Content</h2>
            <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) =>setName(e.target.value)}/>
            <input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) =>setDescription(e.target.value)}/>
            <button type="submit">Create</button>
            </form>
            
        </ul>
    );
}

export default CreateComponent;