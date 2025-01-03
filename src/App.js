import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { description: "", timer: 0, remainingTime: 0, isRunning: false },
    { description: "", timer: 0, remainingTime: 0, isRunning: false },
    { description: "", timer: 0, remainingTime: 0, isRunning: false },
    { description: "", timer: 0, remainingTime: 0, isRunning: false },
  ]);

  const handleDescriptionChange = (index, event) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].description = event.target.value;
    setTasks(updatedTasks);
  };

  const handleTimerChange = (index, event) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].timer = parseInt(event.target.value);
    updatedTasks[index].remainingTime = updatedTasks[index].timer;
    setTasks(updatedTasks);
  };

  const toggleTimer = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isRunning = !updatedTasks[index].isRunning;
    if (!updatedTasks[index].isRunning) {
      updatedTasks[index].remainingTime = updatedTasks[index].timer; // Reset the timer when stopped
    }
    setTasks(updatedTasks);
  };

  return (
    <div className="task-table">
      <div className="task-row task-header">
        <div className="task-cell task-desc">DESCRIPTION</div>
        <div className="task-cell">ALLOTED (MIN)</div>
        <div className="task-cell">REMAINING (MIN)</div>
        <div className="task-cell">START/STOP</div>
      </div>

      {tasks.map((task, index) => (
        <div
          key={index}
          className={`task-row ${task.isRunning ? 'task-row-active' : ''}`}
        >
          <div className="task-cell task-desc">
            <textarea
              value={task.description}
              onChange={(event) => handleDescriptionChange(index, event)}
              placeholder="Enter task description"
            />
          </div>
          <div className="task-cell">
            <input
              type="number"
              value={task.timer || ''}
              onChange={(event) => handleTimerChange(index, event)}
              disabled={task.isRunning}
              placeholder="Time (min)"
            />
          </div>
          <div className="task-cell">
            {task.isRunning ? (
              <p>{task.remainingTime}</p>
            ) : (
              <p>{task.remainingTime}</p>
            )}
          </div>
          <div className="task-cell">
            <button onClick={() => toggleTimer(index)}>
              {task.isRunning ? 'STOP' : 'START'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
