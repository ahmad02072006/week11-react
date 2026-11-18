import ProfileCard from './components/ProfileCard';
import NotificationList from './components/NotificationList';
import Card from './components/Card';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Week 11: React Components & Props</h1>

      <h2>Exercise 1: ProfileCard</h2>
      <ProfileCard
        name="Dr. Toshpulatov"
        role="Professor"
        email="muhiddin@gachon.ac.kr"
      />

      <h2>Exercise 2: Notifications</h2>
      <NotificationList />

      <h2>Exercise 3: Card with children</h2>
      <Card title="Lecture Topics">
        <ul>
          <li>Components</li>
          <li>Props</li>
        </ul>
      </Card>

      <Card title="Homework">
        <p>Build a student portfolio component</p>
      </Card>
    </div>
  );
}

export default App;