import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import {getFetch, postFetch} from "./components/FetchMethods";

function App() {
  const  LoadingListContents = WithLoadingList(List);
  const  LoadingListEspecialContents = WithLoadingList(List);
  const [appStateLoading, setAppStateLoading]= useState(false);
  const [appStateObjectEspecialContents, setAppStateObjectEspecialContents]= useState(null);
  const [appStateObjectContents, setAppStateObjectContents]= useState(null);


  const [name, setName]= useState("");
  const [description, setDescription]= useState("");
  const [message, setMessage]=useState("");
  const[refresh, setRefresh]= useState(true);

  useEffect(()=>{
    if(refresh){
      setAppStateLoading(true);
      getFetch("special_contents").then(val => setAppStateObjectEspecialContents(val))
      getFetch("contents").then(val => setAppStateObjectContents(val))
      setAppStateLoading(false);
      setRefresh(false);
    }

  }, [setAppStateObjectEspecialContents, setAppStateObjectContents, setAppStateLoading, refresh])

  const handleSubmit=async(e) => {
    e.preventDefault();
    try {
      postFetch("contents",{
        name: name, 
        description: description}).then(()=> {
        setName("");
        setDescription("");
        setMessage("Created");
        setRefresh(true);
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div >
      <div >
        <h2 > From API Content and Especial_Content</h2>
      </div>
      <div style={{margin: "20px"}}> 
        <br/>
        <form onSubmit={handleSubmit } style={{borderStyle:"ridge"}} >
          <input
            type="text"
            value={name}
            placeholder="ContentName"
            onChange={(e)=> setName(e.target.value)}            
            style={{width: "200px"}}
            className="Input_Style"
          />
          <br/>
          <input
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e)=> setDescription(e.target.value)}            
            style={{width: "200px"}}
            className="Input_Style"
          />
          <br/>
          
          <div>{message ? <p>{message}</p>: null}</div>
          <br/>
          <button type="submit" className="Button_Style" >Create</button>
        </form>
       

      </div>
      

      
      
      
      
      
      <div>  
        <h2 > Content</h2>
        <LoadingListContents isLoading={appStateLoading} contents={appStateObjectContents}/>
        <br/>
        <br/>
        <h2 >Especial_Content</h2>
        <LoadingListEspecialContents isLoading={appStateLoading} contents={appStateObjectEspecialContents}/>
        <br/>
        <br/>
      </div>
     
      <br/>
      <br/>
     

    </div>

  );
}

export default App;
