// Demonstrates passing props and rendering reusable child components.
import Card from './Card';
import NotificationList from './NotificationList';
import ProfileCard from './ProfileCard';

function PropsShowcaseSection() {
  return (
    <div className="props-showcase">
      <ProfileCard
        name="Ahmad"
        role="Web Programming Student"
        email="ahmad@example.com"
        avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
      />
      <div className="notification-panel">
        <div className="subsection-title">
          <span className="mini-icon" aria-hidden="true">✦</span>
          <div><h4>Recent updates</h4><p>Notifications rendered from data</p></div>
        </div>
        <NotificationList />
      </div>
      <Card title="Children are props">
        <p className="children-copy">This message is passed into <code>Card</code> as its <code>children</code> prop.</p>
      </Card>
    </div>
  );
}

export default PropsShowcaseSection;
