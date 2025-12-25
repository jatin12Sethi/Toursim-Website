import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';

export default function DestinationsList() {
    return (
        <main style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingBottom: '120px' }}>
            <Navbar />

            {/* Hero */}
            <section style={{ height: '60vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <Image
                        src="/hero.png" // Reusing hero for now, could be generic travel image
                        alt="All Destinations"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
                </div>
                <h1 style={{ position: 'relative', color: 'white', zIndex: 1, fontFamily: 'var(--font-playfair)', fontSize: '80px', letterSpacing: '-2px' }}>Our Collection</h1>
            </section>

            <div className="container" style={{ marginTop: '120px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '80px' }}>
                    {destinations.map((dest) => (
                        <Link href={`/destinations/${dest.id}`} key={dest.id} style={{ display: 'block', textDecoration: 'none', color: 'inherit', group: 'hover' }}>
                            <div style={{ height: '560px', position: 'relative', marginBottom: '32px', overflow: 'hidden' }}>
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="hover:scale-105" // Note: This needs global CSS support for hover, using style prop below instead if inline
                                />
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transition: 'transform 0.5s ease' }}>
                                    {/* Inline hover effect hard to do with next/image direct style, usually needs css module */}
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                                <h3 style={{ fontSize: '40px', fontFamily: 'var(--font-playfair)', margin: 0 }}>{dest.name}</h3>
                                <span style={{ fontSize: '18px', fontFamily: 'var(--font-playfair)', opacity: 0.8 }}>${dest.price}</span>
                            </div>
                            <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.6, marginBottom: '16px' }}>{dest.location}</p>
                            <p style={{ opacity: 0.8, lineHeight: '1.6', fontSize: '18px', maxWidth: '90%' }}>{dest.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
