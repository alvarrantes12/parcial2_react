import logo from './logo.svg';
import './App.css';
import WithLoadingList from './components/WithLoadingList';
import List from './components/List';
import { useEffect, useState } from 'react';
import { getFetch } from './components/FetchMethods';
import AddElement from './components/AddElement';

function App() {

  const LoadingList = WithLoadingList(List);

  const [appStateLoading, setAppStateLoading] = useState(false);
  const [appStateContents, setAppStateContents] = useState(null);
  const [appStateSpecialContents, setAppStateSpecialContents] = useState(null);

  const [refresh, setRefresh] = useState(true);

  const sendRefresh = () => {
    setRefresh(true);
  };

  useEffect(() => {
    if(refresh) {
      setAppStateLoading(true);
      getFetch("special_contents").then(val => setAppStateSpecialContents(val));
      getFetch("contents").then(val => setAppStateContents(val));
      setAppStateLoading(false);
      setRefresh(false);
    }
  }, [setAppStateLoading, setAppStateLoading, refresh])


  return (
    <div className="App">
      <div className='App'>
        <h1>Contenidos Especiales</h1>
          <LoadingList isLoading={appStateLoading} contents={appStateSpecialContents}/>
        <h1>Contenidos</h1>
          <LoadingList isLoading={appStateLoading} contents={appStateContents}/><br />
      </div>
        <AddElement sendRefresh={sendRefresh}/>
    </div>
  );
}

export default App;
