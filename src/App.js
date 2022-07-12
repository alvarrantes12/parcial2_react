
import React, { useState, useEffect } from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import { getFetch, postFetch} from "./components/Methods";

function App() {
  const LoadingList = WithLoadingList(List);
  const [appStateLoading, setAppStateLoading] = useState(false)
  const [appStateObject, setAppStateObject] = useState(null)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message1, setMessage1] = useState("");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
    setAppStateLoading(true);
    getFetch("contents").then(val => setAppStateObject(val))
    getFetch("special_contents").then(val => setAppStateObject(val))
    setAppStateLoading(false);
    setRefresh(false);
    }
  }, [setAppStateObject, setAppStateLoading])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      postFetch("contents", {name: name, description: description}).then(() => {
        setName("");
        setDescription("");
        setMessage1("Creado correctamente");
        setRefresh(true);
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
      <div classname="app">
         <div style={{borderStyle: "dashed"}}>
             <h2 classname="First-Title">Contenidos</h2>
         </div>
         <div>
           <LoadingList isLoading={appStateLoading} contents={appStateObject} />
         </div>
   
         <br/>
         <form onSubmit={handleSubmit}>
          <input
           type="text"
           value={name}
           placeholder="Nombre" 
           onChange={(e) => setName(e.target.value)}
           />
           <input
           type="text"
           value={description}
           placeholder="Contenido" 
           onChange={(e) => setDescription(e.target.value)}
           />
           <div>{message1 ? <p>{message1}</p> : null}</div>
           <button type="submit">Crear</button>
         </form>
         </div>
  )

}
export default App;
