import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import { getFetch, postFetch } from "./components/FetchMethods";


function App() {
  const LoadingList = WithLoadingList(List);
  const LoadingListSpecial = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);
  const [appStateObjectSpecial, setAppStateObjectSpecial] = useState(null)

  const[name, setName] = useState("");
  const[description, setDescription] = useState("");

  const [message1,setMessage1] = useState("");
  const [refresh,setRefresh] = useState(true);


  useEffect(() => {
    if (refresh){
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val));
      getFetch("special_contents").then(val => setAppStateObjectSpecial(val));
      setAppStateLoading(false);
      setRefresh(false);
    }
    
  }, [setAppStateObject, setAppStateLoading, setAppStateObjectSpecial, refresh])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      postFetch("contents",{name:name, description:description}).then(()=>{
        setName("");
        setDescription("");
        setMessage1("Creado correctamente.");
        setRefresh(true);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">

        <h1 className="First-Title">Contenidos </h1>

      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
      </div>
      <h1 className="First-Title">Contenidos especiales</h1>

      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObjectSpecial} />
      </div>
      <br/>
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="Second-Title">Agregar contenido</h2>
          <input
            type="text"
            value={name}
            placeholder= "Nombre"
            onChange={(e)=>setName(e.target.value)}
            style={{width: "400px"}}
          />
          <input
            type="text"
            value={description}
            placeholder= "Descripcion"
            onChange={(e)=>setDescription(e.target.value)}
            style={{width: "400px"}}
          />

          <div>{message1 ? <p>{message1}</p>:null}</div>
          <button type="submit" className="Submit-Button">Crear</button>
        </form>
      </div>
      <br/>
    </div>
  );

}

export default App;
