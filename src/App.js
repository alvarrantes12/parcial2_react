import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LoadingList from './components/LoadingList.js'
import List from './components/List.js'
import {getFetch} from './components/UseApi.js'
import CreateComponent from './components/CreateComponent.js'

function App() {
  const LoadingLis = LoadingList(List);
  const [appStateLoading, setAppStateLoading] = useState(false);
  const[appStateObject, setAppStateObject] = useState(null);
  const[appStateObjectSpecial, setAppStateObjectSpecial] = useState(null);
  const [refresh,setRefresh] = useState(true)
  useEffect(() =>{
    if(refresh){
      setAppStateLoading(true);
      getFetch("contents").then(value =>setAppStateObject(value));
      getFetch("special_contents").then(val =>setAppStateObjectSpecial(val));
      setAppStateLoading(false);
      setRefresh(false);
    }
  },[setAppStateObject,setAppStateObjectSpecial,setAppStateLoading,setRefresh]);


  return (
    <div>
      <div>
        <h1>Content</h1>
      </div>
      <div>
        <LoadingLis isLoading={appStateLoading} values={appStateObject}/>
      </div>
      <div>
        <h1>Special Content</h1>
      </div>
      <div>
        <LoadingLis isLoading={appStateLoading} values={appStateObjectSpecial}/>
      </div>
      <div>
        <CreateComponent/>
      </div>
    </div>
  );
}

export default App;
