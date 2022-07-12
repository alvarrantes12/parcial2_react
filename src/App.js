import React, { useState, useEffect } from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import { getFetch, postFetch } from "./components/FetchMethods";
import Form from "./components/Form";

function App() {
  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppStateObject] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message1, setMenssage1] = useState("");
  const [refresh, setRefresh] = useState(true);


  useEffect(() => {
    if (refresh) {
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [setAppStateObject, setAppStateLoading, refresh]);


  return (
    <div className="App">
      <div>
        <h2 className="First-Title">Parcial 2</h2>
      </div>
      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
      </div>
      <Form></Form>
    </div>
  )

  return {appStateLoading};
}

export default App;
