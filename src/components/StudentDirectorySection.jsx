// Demonstrates controlled search, filtering, conditional rendering, and stable list keys.
import { useState } from 'react';

const students = [
  { id: 'ahmad', name: 'Ahmad Rahimov', track: 'React & UI', initials: 'AR', color: 'mint' },
  { id: 'maya', name: 'Maya Chen', track: 'Frontend Development', initials: 'MC', color: 'lavender' },
  { id: 'leo', name: 'Leo Park', track: 'Web Design', initials: 'LP', color: 'peach' },
  { id: 'sara', name: 'Sara Kim', track: 'JavaScript', initials: 'SK', color: 'blue' },
  { id: 'amir', name: 'Amir Khan', track: 'React & UI', initials: 'AK', color: 'yellow' },
  { id: 'nina', name: 'Nina Patel', track: 'Frontend Development', initials: 'NP', color: 'pink' },
  { id: 'daniel', name: 'Daniel Wu', track: 'JavaScript', initials: 'DW', color: 'mint' },
  { id: 'yuna', name: 'Yuna Lee', track: 'Web Design', initials: 'YL', color: 'lavender' },
];

function StudentDirectorySection() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const matchingStudents = students.filter(({ name, track }) => (
    `${name} ${track}`.toLowerCase().includes(normalizedQuery)
  ));

  return (
    <div className="directory-demo">
      <label className="search-field">
        <span className="visually-hidden">Search students by name or study area</span>
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a name or study area..." />
        <kbd>/</kbd>
      </label>
      <p className="results-count" aria-live="polite">
        {matchingStudents.length} {matchingStudents.length === 1 ? 'student' : 'students'} found
      </p>
      {matchingStudents.length > 0 ? (
        <ul className="student-list">
          {matchingStudents.map(({ id, name, track, initials, color }) => (
            <li className="student-item" key={id}>
              <span className={`student-avatar avatar-${color}`} aria-hidden="true">{initials}</span>
              <span className="student-details"><strong>{name}</strong><span>{track}</span></span>
              <span className="student-arrow" aria-hidden="true">↗</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">No results for “{query}”. Try another name or study area.</p>
      )}
    </div>
  );
}

export default StudentDirectorySection;
