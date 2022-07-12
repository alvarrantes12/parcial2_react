import React, {useState, useEffect} from 'react'
import WithLoadingList from "./components/WithLoadingList";
import List from "./components/List";
import { getFetch } from "./components/FetchMethods"
import "./App.css";
import CreateContent from './components/CreateContent';

function App() {
	const LoadingContentList = WithLoadingList(List);
	const LoadingSpecialContentList = WithLoadingList(List);

	const [appContentStateLoading, setAppContentStateLoading] = useState(false);
	const [appContentStateObject, setAppContentStateObject] = useState(null);
  const [appSpecialContentStateLoading, setAppSpecialContentStateLoading] = useState(false);
	const [appSpecialContentStateObject, setAppSpecialContentStateObject] = useState(null);
  const [refresh, setRefresh] = useState(true);


  useEffect(() => {
    if (refresh) {
      setAppContentStateLoading(true);
      getFetch("contents").then(val => setAppContentStateObject(val))
      setAppContentStateLoading(false);
      setRefresh(false);
    }
  }, [appContentStateObject, appContentStateLoading, refresh])

  useEffect(() => {
    if (refresh) {
      setAppSpecialContentStateLoading(true);
      getFetch("special_contents").then(val => setAppSpecialContentStateObject(val))
      setAppSpecialContentStateLoading(false);
      setRefresh(false);
    }
  }, [appSpecialContentStateObject, appSpecialContentStateLoading, refresh])

	return (
		<div className="App">
      <h2 className="First-Title">Local API Connection</h2>
			<div>
				<LoadingContentList isLoading={appContentStateLoading} contents={appContentStateObject} />
			</div>
      <div>
        <LoadingSpecialContentList isLoading={appSpecialContentStateLoading} contents={appSpecialContentStateObject} />
      </div>
      <div>
        <CreateContent setRefresh={setRefresh}/>
      </div>
		</div>
	);
}

export default App;
