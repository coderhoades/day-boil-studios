import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <main>
      <header className="site-header shell">
        <Link href="/" className="brand" aria-label="Day Boil Studios home"><span className="brand-orbit"><i /></span><span>Day Boil</span></Link>
        <nav aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/about" aria-current="page">Founder</Link></nav>
      </header>

      <section className="about-hero shell">
        <p className="kicker"><span /> Founder / product builder</p>
        <div className="about-title">
          <h1>Jeremy<br /><em>Rhoades</em></h1>
          <div className="founder-mark" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <section className="founder-story shell">
        <p className="story-label">The person behind the boil</p>
        <div className="story-copy">
          <p className="lead">Jeremy Rhoades is the founder of Day Boil Studios, an independent home for thoughtful software with a strong point of view.</p>
          <div className="story-columns">
            <p>He builds around the overlooked friction in everyday life—the small, familiar moments where a better tool can remove mental overhead and make something complicated feel natural.</p>
            <p>Day Boil is personal in origin and practical in intent. Its first product, Tuck, began with a familiar problem: a thought arrives, deserves keeping, and disappears while you navigate the system meant to capture it.</p>
          </div>
          <p className="pull-quote">“Make the useful thing feel like the obvious thing.”</p>
        </div>
      </section>

      <section className="founder-values shell">
        <p>What guides the work</p>
        <div><span>01</span><h2>Respect attention.</h2><p>Software should give people their focus back, not compete to own more of it.</p></div>
        <div><span>02</span><h2>Keep agency human.</h2><p>Automation and AI should help people decide—not quietly make every decision for them.</p></div>
        <div><span>03</span><h2>Sweat the ordinary.</h2><p>The smallest interactions are often where a product earns trust.</p></div>
      </section>

      <section className="about-cta shell">
        <p>Current work</p>
        <h2>See what Day Boil<br />is building next.</h2>
        <Link href="/#work" className="text-link">Meet Tuck <ArrowUpRight /></Link>
      </section>

      <footer className="footer shell"><div><strong>Day Boil Studios</strong><p>Independent software, thoughtfully made.</p></div><div><Link href="/"><ArrowLeft size={13} /> Home</Link><span>© 2026</span></div></footer>
    </main>
  );
}
