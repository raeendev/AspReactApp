import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities]=useState([]);
  useEffect(()=>{
    axios.get('https://localhost:5001/api/activities').then((response)=>{
      console.log(response)
      setActivities(response.data)
    });
  },[])
  return (
    <div className="">
      <Header as='h2' icon='users' content='Reactivities'/>     
       <List>
        {activities.map((item:any)=>(
          <List.Item key={item.id}>
            {item.title}
          </List.Item>
        ))}
       </List>    
    </div>
  );
}

export default App;
