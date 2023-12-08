import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ActivityTable from '../components/ActivityTable';
import BabyProfile from '../components/BabyProfile';

function HomePage({ setActivityToEdit }) {
  
  const navigate = useNavigate();

  const [activities, setActivities] = useState([]);
  const [profile, setProfile] = useState([]);

  const loadProfile = async () => {
    try {
      const response = await fetch('/baby-profile');
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

 
  useEffect(() => {
    loadProfile();
  }, []);
  
  useEffect(() => {
    loadActivities();
  }, []);
  
  


  const loadActivities = async () => {
    try {
      const response = await fetch('/activities');
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }
 

  const onEdit = activity => {
    setActivityToEdit(activity);
    navigate('/edit');
  };


  const onDelete = async (_id) => {
    // Confimation
    const confirmation = window.confirm("Are you sure you want to delete this activity?");
    if (!confirmation){
      console.log('Deletion canceled')
      return
    }

    const response = await fetch(`/activities/${_id}`, {method: 'DELETE'});
    if (response.status === 204 || response.status === 200) {
      setActivities(activities.filter(e => e._id !== _id));
    } else {
      console.error(`Failed to delete activity with _id ${_id} with status \
        code = ${response.status}`)
    }
  };

 

  return (
    <>
     <header>
        <h1>Babytime Tracker</h1>
      </header>
      <BabyProfile profile={profile} />
    
      <ActivityTable activities={activities} onEdit={onEdit} onDelete={onDelete}/>

      <br/>
      <Link to='/create'><button className='create-button'>Create an Activity</button></Link>
    </>
  )
}

export default HomePage;
