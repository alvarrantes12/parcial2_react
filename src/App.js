import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import { deleteFetch, getFetch, postFetch, putFetch } from "./components/FetchMethods"

function App() {
  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false)
  const [appStateObject, setAppStateObject] = useState(null)

  const [appStateLoading2, setAppStateLoading2] = useState(false)
  const [appStateObject2, setAppStateObject2] = useState(null)
  
  const[name, setName] = useState("");
  const[description, setDescription] = useState("");
  const[message1, setMessage1] = useState("");
  const[refresh, setRefresh] = useState(true);

  useEffect(() => {
    if(refresh){
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject (val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  },[setAppStateObject, setAppStateLoading, refresh])

  useEffect(() => {
    if(refresh){
      setAppStateLoading2(true);
      getFetch("special_contents").then(val => setAppStateObject2 (val))
      setAppStateLoading2(false);
      setRefresh(false);
    }
  },[setAppStateObject2, setAppStateLoading2, refresh])

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
    <div className="App">
      <div style={{borderStyle: "dashed"}}>
        <h2 className="First-Title">Conexion API local</h2>
      </div>
      <div>
        <LoadingList istLoading={appStateLoading} contents={appStateObject} />
        <LoadingList istLoading={appStateLoading2} contents={appStateObject2} />
      </div>

      <br/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Nombre del contenido"
          onChange={(e) => setName(e.target.value)}
          style={{width: "400px"}}
        />
        <br></br>
        <input
          type="text"
          value={description}
          placeholder="Descripcion"
          onChange={(e) => setDescription(e.target.value)}
          style={{width: "400px"}}
        />
        <div>{message1 ? <p>{message1}</p> : null}</div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default App;