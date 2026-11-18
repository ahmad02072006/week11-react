// Demonstrates composing reusable components into a multi-section React page.
import Card from './components/Card';
import CounterSection from './components/CounterSection';
import MiniQuizSection from './components/MiniQuizSection';
import PropsShowcaseSection from './components/PropsShowcaseSection';
import StudentDirectorySection from './components/StudentDirectorySection';
import TaskManagerSection from './components/TaskManagerSection';
import ThemeFormSection from './components/ThemeFormSection';

const navigation = [
  { href: '#props', label: 'Props' },
  { href: '#counter', label: 'Counter' },
  { href: '#tasks', label: 'Tasks' },
  { href: '#students', label: 'Directory' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#theme-form', label: 'Theme & form' },
];

const currentYear = new Date().getFullYear();

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Ahmad, back to top">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span>Ahmad<span className="brand-period">.</span></span>
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="status-dot" /> WEB PROGRAMMING · WEEK 11</p>
              <h1 id="hero-title">Learning React,<br /><span>one component</span> at a time.</h1>
              <p className="hero-intro">
                Hi, I’m Ahmad. This is my interactive portfolio for <strong>React Components, Props, State &amp; Events</strong>—a collection of small ideas made useful.
              </p>
              <a className="button button-primary" href="#props">Explore the demos <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note" aria-label="Portfolio overview">
              <span className="hero-note-icon" aria-hidden="true">✳</span>
              <p>Built with React<br /><strong>and a little curiosity.</strong></p>
              <span className="hero-note-meta">COMPONENTS · 06 DEMOS</span>
            </div>
          </div>
          <div className="hero-rule"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></div>
        </section>

        <div className="content-wrap">
          <div className="section-heading">
            <p className="eyebrow">THE COMPONENT PLAYGROUND</p>
            <h2>Small demos, real interaction.</h2>
            <p>Each section puts one core React idea into practice. Go ahead and try them.</p>
          </div>

          <div className="demo-grid">
            <Card id="props" number="01" title="Props showcase" description="Reusable pieces, connected with props.">
              <PropsShowcaseSection />
            </Card>
            <Card id="counter" number="02" title="Counter + step controller" description="State updates, with a step you choose.">
              <CounterSection />
            </Card>
            <Card id="tasks" number="03" title="Task manager" description="A little to-do list that remembers.">
              <TaskManagerSection />
            </Card>
            <Card id="students" number="04" title="Student directory" description="Find a classmate as you type.">
              <StudentDirectorySection />
            </Card>
            <Card id="quiz" number="05" title="React mini quiz" description="Five quick questions to check your React instincts.">
              <MiniQuizSection />
            </Card>
            <Card id="theme-form" number="06" title="Theme + signup form" description="A theme switch and a form with live feedback.">
              <ThemeFormSection />
            </Card>
          </div>

          <section className="closing-note" aria-label="Portfolio summary">
            <span className="closing-spark" aria-hidden="true">✳</span>
            <p>That’s a wrap on Week 11.<br /><strong>Thanks for exploring my React playground.</strong></p>
            <a href="#home">Back to top ↑</a>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <span>© {currentYear} Ahmad · Web Programming</span>
        <a href="https://github.com/ahmad02072006" target="_blank" rel="noreferrer" aria-label="Visit Ahmad's GitHub profile (opens in a new tab)">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </>
  );
}

export default App;
