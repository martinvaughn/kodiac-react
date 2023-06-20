import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeadDetails from './components/LeadDetails/LeadDetails';
import { IApiData } from './components/IApiData/IApiData';
import apiWrapper from './components/ApiWrapper/ApiWrapper';
import ProgressCircular from './components/ProgressCircular/Progress';
import './App.css';

function App() {
  const [ apiData, setApiData ] = useState<IApiData | undefined>(undefined);
  const [ resolved, setResolved ] = useState(false);
  const [ thirdParty, setThirdParty ] = useState(true); // Decides if data is pulled from 3rdParty or from local API.

  // Call the API once when component mounts, and anytime thirdParty changes.
  useEffect(() => {
    apiWrapper(setApiData, setResolved, thirdParty);
  }, [thirdParty]);

  return (
    <>
    <Header />
      <Switch>
        <Route path='/' exact>
          {resolved ? 
          <Main 
          setThirdParty={setThirdParty} 
          thirdParty={thirdParty} 
          setRows={setApiData} 
          rows={apiData ? apiData.rows : null}/> 
          : ProgressCircular}
        </Route>
        <Route path='/lead/:id' component={LeadDetails}/>
      </Switch>
    {/* <Footer /> */}
    </>
  );
}

export default App;
