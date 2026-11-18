// Demonstrates controlled inputs, event handlers, effects, and localStorage persistence.
import { useEffect, useState } from 'react';

const storageKey = 'week11-react-tasks';
const filters = ['All', 'Active', 'Done'];

function readTasks() {
  try {
    const savedTasks = window.localStorage.getItem(storageKey);
    const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch (error) {
    console.error('Could not load saved tasks:', error);
    return [];
  }
}

function TaskManagerSection() {
  const [tasks, setTasks] = useState(readTasks);
  const [taskName, setTaskName] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(tasks));
    } catch (error) {
      console.error('Could not save tasks:', error);
    }
  }, [tasks]);

  const visibleTasks = tasks.filter((task) => (
    filter === 'All' || (filter === 'Done' ? task.done : !task.done)
  ));
  const remainingCount = tasks.filter((task) => !task.done).length;

  function addTask(event) {
    event.preventDefault();
    const trimmedName = taskName.trim();
    if (!trimmedName) return;
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), name: trimmedName, done: false },
    ]);
    setTaskName('');
  }

  return (
    <div className="task-demo">
      <form className="task-form" onSubmit={addTask}>
        <label className="visually-hidden" htmlFor="new-task">Add a task</label>
        <input id="new-task" value={taskName} onChange={(event) => setTaskName(event.target.value)} placeholder="What needs doing?" />
        <button className="button button-primary" type="submit">Add task <span aria-hidden="true">+</span></button>
      </form>
      <div className="task-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter tasks">
          {filters.map((filterName) => (
            <button key={filterName} className={filter === filterName ? 'filter-tab is-selected' : 'filter-tab'} type="button" aria-pressed={filter === filterName} onClick={() => setFilter(filterName)}>{filterName}</button>
          ))}
        </div>
        <span className="remaining-count" aria-live="polite"><strong>{remainingCount}</strong> left</span>
      </div>
      {visibleTasks.length > 0 ? (
        <ul className="task-list">
          {visibleTasks.map(({ id, name, done }) => (
            <li className={done ? 'task-item is-done' : 'task-item'} key={id}>
              <label className="task-label">
                <input type="checkbox" checked={done} onChange={() => setTasks((currentTasks) => currentTasks.map((task) => task.id === id ? { ...task, done: !task.done } : task))} />
                <span>{name}</span>
              </label>
              <button className="icon-button delete-task" type="button" aria-label={`Delete ${name}`} onClick={() => setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))}>×</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">{tasks.length === 0 ? 'Your list is clear. Add a task to get started.' : `No ${filter.toLowerCase()} tasks right now.`}</p>
      )}
      <p className="helper-text">Your tasks are saved in this browser.</p>
    </div>
  );
}

export default TaskManagerSection;
