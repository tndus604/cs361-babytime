import './App.css';
import HomePage from './pages/HomePage.js'
import CreateActivitiesPage from './pages/CreateActivitiesPage.js'
import EditActivitiesPage from './pages/EditActivitiesPage.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import { useState } from "react";

function App() {
  const [activityToEdit, setActivityToEdit] = useState();

  return (
    <div className="App">

      <Router>
        <Navigation /> 
 
          <Route path='/' exact>
            <HomePage setActivityToEdit={setActivityToEdit}/> 
          </Route>

          <Route path='/create'>
            <CreateActivitiesPage/>
          </Route>

          <Route path='/edit'>
            <EditActivitiesPage activityToEdit={activityToEdit} />
          </Route>

     
      </Router>
      <footer>
        <p>© Copyright 2023 Su Youn Jeon</p>
      </footer>
    </div>
  );
}

export default App;
