// Demonstrates rendering a keyed list and passing item data through props.
import NotificationItem from './NotificationItem';

const notifications = [
  { id: 'profile', type: 'success', message: 'Profile updated successfully', time: '2m ago' },
  { id: 'materials', type: 'info', message: 'New lecture materials are ready', time: '1h ago' },
  { id: 'reminder', type: 'warning', message: 'Quiz closes this Friday', time: 'Today' },
];

function NotificationList() {
  return (
    <ul className="notification-list" aria-label="Recent notifications">
      {notifications.map(({ id, type, message, time }) => (
        <NotificationItem key={id} type={type} message={message} time={time} />
      ))}
    </ul>
  );
}

export default NotificationList;
