import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSuccess = () => {
    setEditingTask(null);
    window.location.reload();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CRUD de Tareas - Django + Vite + React</h1>
      <TaskForm taskToEdit={editingTask} onSuccess={handleSuccess} />
      <TaskList onEdit={handleEdit} />
    </div>
  );
}

export default App;
