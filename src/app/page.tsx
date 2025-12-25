import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Image
            src="/hero.png"
            alt="Sanctuary Resort"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white', paddingTop: '80px' }}>
          <span style={{ fontSize: '14px', letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase', opacity: 0.9 }} className="animate-fade-in">The Collection</span>
          <h1 className="animate-fade-in hero-title" style={{ maxWidth: '900px', marginBottom: '32px', letterSpacing: '-2px' }}>
            Disconnect <br /> to Reconnect.
          </h1>
          <p style={{ maxWidth: '440px', fontSize: '18px', marginBottom: '56px', opacity: 0.9, lineHeight: '1.6' }} className="animate-fade-in">
            Experience the world's most remote landscapes in unparalleled comfort. Sustainable luxury for the modern nomad.
          </p>
          <div className="animate-fade-in">
            <Link href="/destinations" className="btn btn-outline" style={{ border: '1px solid rgba(255,255,255,0.4)' }}>Explore Locations</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding container">
        <div className="grid-cols-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ marginBottom: '24px', fontFamily: 'var(--font-playfair)', color: 'var(--color-primary)' }}>
              A new standard for <br /> <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>quiet luxury</span>.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '20px', color: '#4A4A4A' }}>
              We believe that true luxury is silence, space, and time. Our properties are designed to disappear into their surroundings, offering you a front-row seat to nature's theatre, without leaving a trace.
            </p>
            <div style={{ marginTop: '32px', height: '1px', width: '100px', backgroundColor: 'var(--color-secondary)' }}></div>
          </div>
        </div>
      </section>

      {/* Destinations Horizontal Scroll */}
      <section style={{ paddingBottom: '160px', overflowX: 'hidden' }}>
        <div className="container" style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: '40px' }}>
          <h3 style={{ fontSize: '40px', fontFamily: 'var(--font-playfair)' }}>Featured Destinations</h3>
          <Link href="/destinations" style={{ fontSize: '14px', letterSpacing: '1px', borderBottom: '1px solid currentColor', paddingBottom: '4px', cursor: 'pointer' }}>VIEW ALL</Link>
        </div>

        <div style={{ display: 'flex', gap: '32px', paddingLeft: 'max(40px, calc((100vw - 1400px) / 2))', paddingRight: '40px', overflowX: 'auto', paddingBottom: '20px', scrollbarWidth: 'none' }}>
          {destinations.map((dest) => (
            <Link key={dest.id} href={`/destinations/${dest.id}`} style={{ minWidth: '400px', height: '600px', backgroundColor: 'var(--color-accent)', position: 'relative', overflow: 'hidden', display: 'block' }}>
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />

              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', color: 'white' }}>
                <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{dest.location}</span>
                <h4 style={{ fontSize: '32px', fontFamily: 'var(--font-playfair)', marginBottom: '8px' }}>{dest.name}</h4>
                <span style={{ fontSize: '14px', opacity: 0.9 }}>{dest.priceLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
