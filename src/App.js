import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import "./App.css"
import {getFetch, postFetch, putFetch, deleteFetch} from "./components/FetchMethods";

function App() {
  const LoadingList = WithLoadingList(List);  

  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);

  const [name, setName] = useState("");
  const [message1, setMessage1] = useState("");
  const [refresh, setRefresh] = useState(true);

  const [nameEdit, setNameEdit] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [message2, setMessage2] = useState("");

  const [idDelete, setIdDelete] = useState("");
  const [message3, setMessage3] = useState("");
  

  useEffect(() => {
    if(refresh){
    setAppState(true);
    getFetch("content").then(val => setAppStateObject(val))
    getFetch("special_content").then(val => setAppStateObject(val))
    setAppStateLoading(false);
    setRefresh(false);
    }
  }, [setAppState, setAppStateLoading, refresh])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      postFetch("content", {name:name}).then(() => {
        setName("");
        setMessage1("Creado correctamente");
        setRefresh(true);
      });
    } catch (err){
      console.log(err)
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      putFetch(`content/${idEdit}`, {name:nameEdit}).then(() => {
        setNameEdit("");
        setIdEdit("")
        setMessage2("Editado correctamente");
        setRefresh(true);
      });
    } catch (err){
      console.log(err)
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      deleteFetch(`content/${idEdit}`).then(() => {
        setIdDelete("");
        setMessage3("Eliminado correctamente");
        setRefresh(true);
      });
    } catch (err){
      console.log(err)
    }
  }

  return(
    <div>
      <div>
        <h2>Contents</h2>
      </div>
      <div>
        <LoadingList isLoading={appState.loading} contents={appState.users}/>
      </div>

      <br/>

      <form>
        <input
        type = "text"
        value = {name}
        placeholder = "Nombre del contenido"
        onChange = {(e) => setName(e.target.value)}
        />
        <div>{message1 ? <p>{message1}</p> : null}</div>
        <button type = "submit"> Crear </button>
      </form>

      <br/>

      <form onSubmit = {handleEdit}>
        <input
        type = "text"
        value = {idEdit}
        placeholder = "Identificador"
        onChange = {(e) => setIdEdit(e.target.value)}
        />

        <input
        type = "text"
        value = {nameEdit}
        placeholder = "Nombre del contenido"
        onChange = {(e) => setNameEdit(e.target.value)}
        />
        <div>{message1 ? <p>{message1}</p> : null}</div>
        <button type = "submit"> Editar </button>
      </form>

      <br/>

      <form onSubmit = {handleDelete}>
        <input
        type = "text"
        value = {idDelete}
        placeholder = "Identificador"
        onChange = {(e) => setName(e.target.value)}
        />
        <div>{message3 ? <p>{message3}</p> : null}</div>
        <button type = "submit"> Eliminar </button>
      </form>

    </div>
    

  );

}

export default App;

