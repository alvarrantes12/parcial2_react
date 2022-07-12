import React, { useState, useEffect} from 'react';
import List from './components/List';
import WithLoadingList from './components/WithLoadingList';
import './App.css';
import {getFetch, postFetch} from "./components/FetchMethods"

function App() {

  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);

  const [appStateLoadingSpecial, setAppStateLoadingSpecial] = useState(false);
  const [appStateObjectSpecial, setAppStateObjectSpecial] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message1, setMessage1] = useState("");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if(refresh){ //refresca la lista a ;a hora de agregar uno
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }

  }, [setAppStateObject, setAppStateLoading, refresh])

  useEffect(() => {
    if(refresh){ //refresca la lista a ;a hora de agregar uno
      setAppStateLoadingSpecial(true);
      getFetch("special_contents").then(val => setAppStateObjectSpecial(val))
      setAppStateLoadingSpecial(false);
      setRefresh(false);
    }

  }, [setAppStateObject, setAppStateLoading, refresh])

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
        <h2 className="First-Tittle">Segundo parcial</h2>
      </div>
      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
        <h2 className="First-Tittle">Special content</h2>
        <LoadingList isLoading={appStateLoadingSpecial} contents={appStateObjectSpecial} />
      </div>

      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Nombre del contenido"
          onChange={(e) => setName(e.target.value)}
          style={{width: "400px"}}
        />
        <input
        type="text"
        value={description}
        placeholder="Descripcion del contenido"
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
