import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPersonBreastfeeding } from 'react-icons/fa6';
import { GiBabyBottle } from 'react-icons/gi';
import { MdBabyChangingStation } from 'react-icons/md';
import { GiNightSleep } from 'react-icons/gi';


function CreateActivityPage() {

  const history = useNavigate();

  const [name, setName] = useState('');

  const handleActivityClick = (activity) => {
    setName(activity);
  }

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [amount, setAmount] = useState('');
  const [color, setColor] = useState('');
  const [memo, setMemo] = useState('');

  const addActivity = async () => {

    const newActivity = {name, start, end, amount, color, memo};

    try {
      const response = await fetch('/activities', {
        method: 'POST',
        body: JSON.stringify(newActivity),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        alert("Successfully added.");
      } else {
        throw new Error(`Failed to add activity. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred while making the request. Please type in valid input.");
    }

    history.push('/');
  }


  return (
    <div>
      <h2>Add New Acitivity</h2>


        <fieldset>

          <button className="activity-button" onClick={() => handleActivityClick('Breastfeed')}>
            <FaPersonBreastfeeding className="icon-breastfeed" size={(28)}/>
            <p>Breastfeed</p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Formula')}>
            <GiBabyBottle size={(28)} />
            <p><small>Formula</small></p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Diaper')}>
            <MdBabyChangingStation size={(28)} />
            <p><small>Diaper</small></p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Sleep')}>
            <GiNightSleep size={(28)}/>
            <p><small>Sleep</small></p>
          </button>
          <button className="activity-button" onClick={() => handleActivityClick('Medication')}>
            <GiNightSleep size={(28)}/>
            <p><small>Medication</small></p>
          </button>
          <br/>


          <label for="start">Start time: </label> 
          <input id="start"
            type="time"
            value={start}
            onChange={e => setStart(e.target.value)}
          /> <br/>

          <label for="end">End time: </label> 
          <input id="end"
            type="time"
            value={end}
            onChange={e => setEnd(e.target.value)}
          /> <br/>

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
        <button className="create-button" onClick={addActivity}> Create </button>

    </div>
  )

}

export default CreateActivityPage;
