import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaPersonBreastfeeding } from 'react-icons/fa6';
import { GiBabyBottle } from 'react-icons/gi';
import { MdBabyChangingStation } from 'react-icons/md';
import { GiNightSleep } from 'react-icons/gi';

function EditActivityPage({ activityToEdit }) {

  const history = useHistory();

  const [name, setName] = useState('');

  const handleActivityClick = (activity) => {
    setName(activity);
  }

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [amount, setAmount] = useState('');
  const [color, setColor] = useState('');
  const [memo, setMemo] = useState('');

  const editActivity = async () => {
    const updatedActivity = {name, start, end, amount, color, memo};

    const response = await fetch(`/activities/${activityToEdit._id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedActivity),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      alert("Successfully edited.");
    } else {
      alert(`Failed to edit activity, status code = ${response.status}`);
    }
    history.push('/');
  }

  return (
    <div>
      <h2>Edit a Activity</h2>

        <fieldset>
          <button className="activity-button" onClick={() => handleActivityClick('Breastfeed')}>
            <FaPersonBreastfeeding />
            <p><small>Breastfeed</small></p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Formula')}>
            <GiBabyBottle />
            <p><small>Formula</small></p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Diaper')}>
            <MdBabyChangingStation />
            <p><small>Diaper</small></p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Sleep')}>
            <GiNightSleep />
            <p><small>Sleep</small></p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Medication')}>
            <GiNightSleep />
            <p><small>Medication</small></p>
          </button> <br/>

          <label for="start">Start Time: </label> 
          <input id="start"
            type="number"
            min="0"
            placeholder="10"
            value={start}
            onChange={e => setStart(e.target.value)}
          /> <br/>

          <label for="end">End Time: </label> 
          <input id="end"
            type="number"
            min="0"
            placeholder="210"
            value={end}
            onChange={e => setEnd(e.target.value)}
          /> 
          <br/>

          <label for="amount">Amount (ml): </label> 
          <input id="amount"
            type="number"
            min="0"
            placeholder="200"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          /> <br/>

          <label for="color">Color: </label> 
          <select id="color" name="color" value={color} onChange={e => setColor(e.target.value)}>
              <option value="" disabled selected hidden>Please Choose...</option>
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="brown">brown</option>
              <option value="black">black</option>
          </select>
          <br/>


          <label for="memo">Memo</label> 
          <input id="memo"
            type="text"
            placeholder="comments"
            value={memo}
            onChange={e => setMemo(e.target.value)}
          /> <br/>


        </fieldset>
        <br/>
        <button onClick={editActivity}> Save </button>

    </div>
  )

};

export default EditActivityPage;