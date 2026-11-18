// Demonstrates controlled form fields, validation feedback, and a theme toggle.
import { useState } from 'react';

const initialForm = { name: '', email: '', track: '', updates: false };

function ThemeFormSection() {
  const [theme, setTheme] = useState('light');
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const nameError = form.name.trim() ? '' : 'Please enter your name.';
  const emailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Enter a valid email address.';
  const trackError = form.track ? '' : 'Choose a study area.';
  const formIsValid = !nameError && !emailError && !trackError;

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: type === 'checkbox' ? checked : value }));
    setSubmitted(false);
  }

  function submitForm(event) {
    event.preventDefault();
    setAttemptedSubmit(true);
    setSubmitted(formIsValid);
  }

  return (
    <div className={`theme-demo theme-${theme}`}>
      <div className="theme-control">
        <div><strong>Choose your canvas</strong><span>Preview the demo in a different theme.</span></div>
        <button className="theme-toggle" type="button" aria-pressed={theme === 'dark'} onClick={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}>
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span> {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </div>
      <div className="form-preview">
        <div className="form-column">
          <h4>Join the study circle</h4>
          <p>Get a friendly note when new learning resources are shared.</p>
          <form className="signup-form" onSubmit={submitForm} noValidate>
            <div className="form-field">
              <label htmlFor="signup-name">Your name</label>
              <input id="signup-name" name="name" value={form.name} onChange={updateField} aria-invalid={Boolean(attemptedSubmit && nameError)} aria-describedby={attemptedSubmit && nameError ? 'name-error' : undefined} placeholder="e.g. Ahmad" />
              {attemptedSubmit && nameError && <span className="field-error" id="name-error">{nameError}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="signup-email">Email address</label>
              <input id="signup-email" name="email" type="email" value={form.email} onChange={updateField} aria-invalid={Boolean(attemptedSubmit && emailError)} aria-describedby={attemptedSubmit && emailError ? 'email-error' : undefined} placeholder="you@example.com" />
              {attemptedSubmit && emailError && <span className="field-error" id="email-error">{emailError}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="signup-track">I’m interested in</label>
              <select id="signup-track" name="track" value={form.track} onChange={updateField} aria-invalid={Boolean(attemptedSubmit && trackError)} aria-describedby={attemptedSubmit && trackError ? 'track-error' : undefined}>
                <option value="">Choose a topic</option>
                <option value="React & UI">React &amp; UI</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Web design">Web design</option>
              </select>
              {attemptedSubmit && trackError && <span className="field-error" id="track-error">{trackError}</span>}
            </div>
            <label className="checkbox-field">
              <input name="updates" type="checkbox" checked={form.updates} onChange={updateField} />
              <span>Send me occasional course updates</span>
            </label>
            <button className="button button-primary form-submit" type="submit">Join the circle <span aria-hidden="true">→</span></button>
            {submitted && <p className="form-success" role="status">Thanks, {form.name.trim()}! Your preview is ready.</p>}
          </form>
        </div>
        <aside className="live-preview" aria-live="polite">
          <span className="preview-label">LIVE PREVIEW</span>
          <span className="preview-avatar" aria-hidden="true">{form.name.trim().charAt(0).toUpperCase() || 'A'}</span>
          <strong>{form.name.trim() || 'Your name'}</strong>
          <span>{form.email || 'your@email.com'}</span>
          <span className="preview-track">{form.track || 'Your chosen topic'}</span>
          <span className="preview-updates">{form.updates ? '✓ Updates enabled' : 'Updates not enabled'}</span>
        </aside>
      </div>
    </div>
  );
}

export default ThemeFormSection;
