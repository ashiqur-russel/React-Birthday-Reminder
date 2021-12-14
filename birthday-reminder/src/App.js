import React, { useState } from 'react';
import data from './data';
import List from './components/List';
function App() {

  //Define state
  const [people,setPeople] = useState(data);

  //Handler for delete all list
  const deleteAll = ()=>{
    setPeople([]);
  }

  return (
    <main>
      <section className='container'>
      <h2>Birthday Reminder</h2>
            <h2 className='underline'></h2>

      <h3>{people.length} birthdays today</h3>
      <List people={people}/> 
      <button className='btn' onClick={deleteAll}> Clear All</button>
      </section>
  
    </main>
  )
}

export default App;