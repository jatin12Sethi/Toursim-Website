import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { destinations } from '@/data/destinations';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return destinations.map((dest) => ({
        id: dest.id.toString(),
    }));
}

export default function DestinationDetail({ params }: { params: { id: string } }) {
    const destination = destinations.find(d => d.id.toString() === params.id);

    if (!destination) {
        notFound();
    }

    return (
        <main style={{ backgroundColor: 'var(--color-background)' }}>
            <Navbar />

            {/* Editorial Hero */}
            <section style={{ height: '85vh', position: 'relative', overflow: 'hidden' }}>
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)' }} />
                <div className="container" style={{ position: 'absolute', bottom: '80px', left: 0, right: 0, color: 'white', textAlign: 'center' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px', display: 'block', marginBottom: '16px' }}>{destination.location}</span>
                    <h1 style={{ fontSize: '96px', fontFamily: 'var(--font-playfair)', lineHeight: '1' }}>{destination.name}</h1>
                </div>
            </section>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(300px, 0.5fr)', gap: '120px', padding: '120px 40px' }}>
                {/* Main Content */}
                <div>
                    <h2 style={{ fontSize: '24px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px', opacity: 0.5 }}>The Experience</h2>
                    <p style={{ fontSize: '32px', lineHeight: '1.5', fontFamily: 'var(--font-playfair)', marginBottom: '80px' }}>
                        "{destination.description}"
                    </p>

                    <div style={{ padding: '40px', backgroundColor: '#EAE8E0' }}>
                        <h3 style={{ fontSize: '20px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px' }}>Amenities & Features</h3>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', listStyle: 'none', padding: 0 }}>
                            {destination.features.map((feature, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px' }}>
                                    <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sticky Booking Widget */}
                <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
                    <div style={{ padding: '40px', backgroundColor: 'white', border: '1px solid #E5E5E5', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '24px' }}>
                            <span style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>Rate per night</span>
                            <span style={{ fontSize: '32px', fontFamily: 'var(--font-playfair)' }}>${destination.price}</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                            <div style={{ fontSize: '14px', opacity: 0.8, lineHeight: '1.6' }}>
                                Includes breakfast, airport transfer, and all guided activities listed in the itinerary.
                            </div>
                        </div>

                        <Link href={`/book?id=${destination.id}`} className="btn btn-primary" style={{ width: '100%', textDecoration: 'none', textAlign: 'center', padding: '20px' }}>
                            Check Availability
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
