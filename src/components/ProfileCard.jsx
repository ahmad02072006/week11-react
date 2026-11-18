// Demonstrates destructured props and a sensible default avatar.
function ProfileCard({
  name = 'Your name',
  role = 'React learner',
  email = 'hello@example.com',
  avatarUrl = 'https://placehold.co/160x160/e5f3f2/176c68?text=A',
}) {
  return (
    <article className="profile-card">
      <img className="profile-avatar" src={avatarUrl} alt={`${name}, profile portrait`} />
      <div className="profile-info">
        <span className="profile-tag">STUDENT PROFILE</span>
        <h4>{name}</h4>
        <p>{role}</p>
        <a href={`mailto:${email}`} aria-label={`Email ${name} at ${email}`}>{email}</a>
      </div>
      <span className="profile-check" aria-label="Profile verified">✓</span>
    </article>
  );
}

export default ProfileCard;
