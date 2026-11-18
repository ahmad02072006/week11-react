// Demonstrates a focused functional component receiving destructured props.
const icons = { success: '✓', warning: '!', info: 'i' };

function NotificationItem({ type = 'info', message, time = 'Just now' }) {
  return (
    <li className={`notification-item notification-${type}`}>
      <span className="notification-icon" aria-hidden="true">{icons[type] ?? icons.info}</span>
      <span className="notification-message">{message}</span>
      <time>{time}</time>
    </li>
  );
}

export default NotificationItem;
