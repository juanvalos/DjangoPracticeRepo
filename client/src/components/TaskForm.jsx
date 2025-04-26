import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from '../api';

function TaskForm({ taskToEdit, onSuccess }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, completed: false };

    if (taskToEdit) {
      await updateTask(taskToEdit.id, taskData);
    } else {
      await createTask(taskData);
    }

    setTitle('');
    setDescription('');
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>{taskToEdit ? "Editar Tarea" : "Crear Nueva Tarea"}</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">{taskToEdit ? "Actualizar" : "Crear"}</button>
    </form>
  );
}

export default TaskForm;
