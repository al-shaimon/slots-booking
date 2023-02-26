import React, { useState } from 'react';
import TimeSlots from './TimeSlots';
import scheduleData from './public/schedule.json';

function App() {
  const [duration, setDuration] = useState(0);

  const handleDurationChange = (event) => {
    setDuration(parseInt(event.target.value));
  };

  return (
    <div>
      <label>
        Meeting Duration (in minutes):
        <input type="number" value={duration} onChange={handleDurationChange} />
      </label>
      <TimeSlots schedule={scheduleData.schedule} duration={duration} />
    </div>
  );
}

export default App;
