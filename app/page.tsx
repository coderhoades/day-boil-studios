import Link from 'next/link';
import { ArrowUpRight, FlaskConical } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <Link href="/" className="brand" aria-label="Day Boil Studios home"><span className="brand-orbit"><i /></span><span>Day Boil</span></Link>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><Link href="/about">Founder</Link></nav>
      </header>
      <section className="hero shell">
        <p className="kicker"><span /> Independent software studio</p>
        <h1>Software for ideas<br />that <em>won’t sit still.</em></h1>
        <p className="hero-copy">Day Boil Studios designs and builds thoughtful software for the messy, human moments that deserve better tools.</p>
        <a className="text-link" href="#work">See what we’re building <ArrowUpRight /></a>
        <div className="boil-field" aria-hidden="true"><i /><i /><i /><i /></div>
      </section>
      <section className="manifesto shell"><p>Our point of view</p><blockquote>Useful software should feel less like operating a machine and more like finally having the right place to put something.</blockquote></section>
      <section className="work-section shell" id="work">
        <div className="section-heading"><p>01 / Current work</p><h2>Built from real friction.</h2></div>
        <article className="product-card">
          <div className="product-copy"><span className="status"><i /> In development</span><h3>Tuck</h3><p>A capture-first home for the thoughts, tasks, and loose ends you need out of your head before they disappear.</p><span className="coming">Coming soon</span></div>
          <div className="product-art" aria-hidden="true"><div className="paper"><b /></div><div className="pocket" /></div>
        </article>
      </section>
      <section className="principles shell">
        <div><FlaskConical /><h3>Small experiments</h3><p>We start with a specific problem, put something useful in people’s hands, and learn.</p></div>
        <div><span className="line-icon">↳</span><h3>Human defaults</h3><p>Technology should adapt to people—not require people to become system administrators.</p></div>
        <div><span className="line-icon">◎</span><h3>Built to last</h3><p>Clear decisions, durable foundations, and a healthy suspicion of novelty for novelty’s sake.</p></div>
      </section>
      <footer className="footer shell"><div><strong>Day Boil Studios</strong><p>Independent software, thoughtfully made.</p></div><div><Link href="/about">About the founder</Link><span>© 2026</span></div></footer>
    </main>
  );
}
