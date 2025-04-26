import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api';

function TaskList({ onEdit }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.map(task => (
        <div key={task.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.completed ? "✅ Completada" : "⏳ Pendiente"}</p>
          <button onClick={() => onEdit(task)}>Editar</button>
          <button onClick={() => handleDelete(task.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
