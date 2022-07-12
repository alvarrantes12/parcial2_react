import React, { useState, useEffect } from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';

function App() {
  const LoadingList = WithLoadingList(List);

  const [appState, setAppState] = useState({loading: false, contents: null})

  useEffect (() => {
    setAppState({loading: true});
    fetch(process.env.REACT_APP_API_URL)
    .then((res) => res.json())
    .then((contents) => {setAppState({loading: false, contents: contents}) })
  }, [setAppState])

  return(
    <div className="App">
      <div style={{borderStyle:"dashed"}}>
        <h2>Lista de contenidos</h2>
      </div>
      <div>
        <LoadingList isLoading={appState.loading} contents={appState.contents}/>
      </div>
    </div>
  );

}

export default App;