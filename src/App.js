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


  return (
    <div className="App">
      <div >
        <h2 className="Component-Title">  Conexión API local</h2>
      </div>
      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject}/>
      </div>
      <PostForm refetch={refetch}/>
    </div>
  );
}

export default App;