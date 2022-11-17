import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  useEffect(() => {
    axios.get("https://localhost:5001/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  function handleSelectedActivity() {}
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7rem" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
