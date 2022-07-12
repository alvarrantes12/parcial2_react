import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { getFetch } from './components/Methods';
import IsLoading from './components/IsLoading';

function App() {

  const LoadingList = IsLoading(List);
  const[appStateLoading, setAppStateLoading] = useState(false)
  const[appStateObject, setAppStateObject] = useState(null)
  const[refresh, setRefresh] = useState(true);

  useEffect(() => {
    if(refresh){
        setAppStateLoading(true);
        getFetch("contents").then(val => setAppStateObject(val))        
        setAppStateLoading(false);
        setRefresh(false);
      }
    }, [setAppStateObject, setAppStateLoading,refresh])

  return (
    <div className="App">
      
      <div 
      className='First-Title'
      style={{borderStyle: "dashed"}}>
      <h2 className='First-Title'>Examen #2</h2>
      <h3 className='First-Title'>Juan Diego Prendas B96105</h3>
      </div>      
      <div>
      <LoadingList isLoading={appStateLoading} contents={appStateObject}/>
      </div>            
      <Form/>
    </div>
  );
}

export default App;
