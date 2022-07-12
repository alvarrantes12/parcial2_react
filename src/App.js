import React, { useState, useEffect } from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import { getFetch, postFetch } from "./components/FetchMethods";
import Form from "./components/Form"

function App() {
  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false)
  const [appStateObject, setAppStateObject] = useState(null)

  const[refresh, setRefresh] = useState(true);


  useEffect(() => {
    if(refresh){
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [setAppStateObject, setAppStateLoading,refresh ])

  return (
    <div className="App">
      <div style={{borderStyle: "dashed"}}>
        <h2 className="First-Title">Contenidos</h2>
      </div>
      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
      </div>
      <Form />
      
    </div>
  );

}

export default App;
