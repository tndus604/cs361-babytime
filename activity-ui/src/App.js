import './App.css';
import HomePage from './pages/HomePage.js';
import CreateActivitiesPage from './pages/CreateActivitiesPage.js';
import EditActivitiesPage from './pages/EditActivitiesPage.js';
import CreateProfilePage from './pages/CreateProfilePage.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import { useState } from "react";

function App() {
  const [activityToEdit, setActivityToEdit] = useState();

  return (
    <div className="App">

      {/* <Router>
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

          <Route path='/create-profile'>
            <CreateProfilePage />
          </Route>
     
      </Router> */}
      <Router>
        <Navigation />

        {/* Use <Routes> instead of individual <Route> */}
        <Routes>
          <Route path="/" element={<HomePage setActivityToEdit={setActivityToEdit} />} />
          <Route path="/create" element={<CreateActivitiesPage />} />
          <Route path="/edit" element={<EditActivitiesPage activityToEdit={activityToEdit} />} />
          <Route path="/create-profile" element={<CreateProfilePage />} />
        </Routes>
      </Router>
      <footer>
        <p>© Copyright 2023 Su Youn Jeon</p>
      </footer>
    </div>
  );
}

export default App;
