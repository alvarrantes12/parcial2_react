import React, { useState, useEffect } from "react";
import './App.css';
import { getFetch} from "./components/FetchMethods";
import Post from "./components/Post";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
function App() {

  const [AppStateLoading, setAppStateLoading] = useState(false);
  const [appStateObject, setAppstateObject] = useState(null);
  const [refresh, setRefresh] = useState(true);
  const LoadingList = WithLoadingList(List);
  useEffect(() => {
    
      if (refresh) {
          setAppStateLoading(true);
          getFetch("special_contents").then(val => setAppstateObject(val));
          setAppStateLoading(false);
          setRefresh(false);
      }
  }, [setAppstateObject, setAppStateLoading, refresh])

  return (
    <div className="App">

      <div>
      <LoadingList isLoading={AppStateLoading} contents={appStateObject} nam1={"Table of special contents"} />
      </div>
      <br />
      <div>

  <Post></Post>
    </div>

    </div>
  )
}


export default App;
