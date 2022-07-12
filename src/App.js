import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import {getFetch} from "./components/FetchMethods";
import FormsCreate from "./components/Form";

function App() {
  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false)
  const [appStateObject, setAppStateObject] = useState(null)
  const [appStateObject2, setAppStateObject2] = useState(null)

  const [refresh, setRefresh] = useState(true);



  useEffect(() => {
    if(refresh){
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val))
      getFetch("special_contents").then(val => setAppStateObject2(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [setAppStateLoading, setAppStateObject, refresh])


  return (
    <div className="App">
      <div>
        <h2 className="First-Title">React API</h2>
      </div>
      <div>
        <h2 className="Component-Titlle">Estos son los contenidos disponibles</h2>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
      </div>
      <div>
        <h2 className="Component-Titlle">Estos son los contenidos especiales disponibles</h2>
        <LoadingList isLoading={appStateLoading} contents={appStateObject2} />
      </div>
      <br />
      <FormsCreate />
    </div>
  );
}

export default App;
