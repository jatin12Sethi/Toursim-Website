import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            padding: '32px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 50,
            color: 'white' // Note: This hardcodes white. For non-hero pages you might want conditional styling.
        }}>
            <Link href="/" style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', letterSpacing: '2px', fontWeight: 'bold' }}>
                SANCTUARY
            </Link>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', fontSize: '13px', letterSpacing: '1px', fontWeight: 500 }}>
                <Link href="/destinations">DESTINATIONS</Link>
                <Link href="/journal">JOURNAL</Link>
                <Link href="/book" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: '12px' }}>BOOK NOW</Link>
            </div>
        </nav>
    );
}
