import './App.css';
import PostForm from './components/PostForm';
import WithLoadingList from "./components/WithLoadingList";
import List from "./components/List";
import { useEffect, useState } from 'react';
import { getFetch } from './components/FetchMethods';

function App() {
  const LoadingList = WithLoadingList(List);
  
  const [appStateLoading, setAppStateLoading] = useState(false)
  const [appStateObject, setAppStateObject] = useState(null)

  const [appStateLoading2, setAppStateLoading2] = useState(false)
  const [appStateObject2, setAppStateObject2] = useState(null)

  const [refresh, setRefresh] = useState(true);

  const refetch = () => {
    setRefresh(true)
  }

  useEffect(() => {
    if (refresh) {
      setAppStateLoading(true);
      getFetch("contents").then(val => setAppStateObject(val))
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [appStateObject, appStateLoading, refresh])

  useEffect(() => {
    if (refresh) {
      setAppStateLoading2(true);
      getFetch("special_contents").then(val => setAppStateObject2(val))
      setAppStateLoading2(false);
      setRefresh(false);
    }
  }, [appStateObject2, appStateLoading2, refresh])


  return (
    <div className="App">
      <div >
        <h2 className="Component-Title">  Conexión API local</h2>
      </div>
      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject}/>
        <LoadingList isLoading={appStateLoading2} contents={appStateObject2}/>
      </div>
      <PostForm refetch={refetch}/>
    </div>
  );
}

export default App;