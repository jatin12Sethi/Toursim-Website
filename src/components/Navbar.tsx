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

            {/* Desktop Nav */}
            <div className="nav-links" style={{ fontSize: '13px', letterSpacing: '1px', fontWeight: 500 }}>
                <Link href="/destinations">DESTINATIONS</Link>
                <Link href="/journal">JOURNAL</Link>
                <Link href="/book" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: '12px' }}>BOOK NOW</Link>
            </div>

            {/* Mobile Menu Placeholder - Visible only on mobile via CSS if I added a class, but for now just relying on nav-links hiding on mobile. 
                Ideally we add a burger menu here that is display:block on mobile. 
            */}
            <button style={{ display: 'none' }} className="mobile-menu-btn">MENU</button>
        </nav>
    );
}
