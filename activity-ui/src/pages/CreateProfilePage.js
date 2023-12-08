import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function CreateProfilePage() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');


  const addProfile = async () => {

    const newProfile = {name, birthday};

    try {
      const response = await fetch('/baby-profile', {
        method: 'POST',
        body: JSON.stringify(newProfile),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        alert("Successfully added.");
      } else {
        throw new Error(`Failed to add profile. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred while making the request. Please type in valid input.");
    }

    history.push('/');
  }


  return (
    <div>
      <h2>Add New Profile</h2>


        <fieldset>

            <label for="name">Baby's name: </label> 
            <input id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            /> <br/>


          <label for="birthday">Birthday: </label> 
          <input id="birthday"
            type="date"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
          /> <br/>



        </fieldset>
        <br/>
        <button className="create-button" onClick={addProfile}> Create </button>

    </div>
  )

}

export default CreateProfilePage;
