import React, { useState, useEffect } from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import { deleteFetch, getFetch, postFetch, putFetch } from "./components/FetchMethods"
import Form from "./components/forms/Form";
function App() {
  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);

  const [appStateLoading2, setAppStateLoading2] = useState(false);
  const [appStateObject2, setAppStateObject2] = useState(null);

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [setAppStateObject, setAppStateLoading, refresh])

  useEffect(() => {
    if (refresh) {
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [setAppStateObject, setAppStateLoading, refresh])

  useEffect(() => {
    if (refresh) {
      setAppStateLoading2(true);
      getFetch("special_contents").then(val => setAppStateObject2(val))
      setAppStateLoading2(false);
      setRefresh(false);
    }
  }, [setAppStateObject2, setAppStateLoading2, refresh])


  return (
    <div className="App">
      <div className="div-titulo">
        <h2 className="First-Title">API Datos</h2>
      </div>
      <div>
        <h3>Datos disponibles</h3>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
        <LoadingList isLoading={appStateLoading2} contents={appStateObject2} />
      </div>
      <Form />

  </div>
);

}

export default App;

