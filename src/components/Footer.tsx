import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#1B1C1A', color: 'white', padding: '80px 40px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px' }}>
                <div style={{ paddingRight: '40px' }}>
                    <h4 style={{ fontFamily: 'var(--font-playfair)', fontSize: '24px', letterSpacing: '2px', marginBottom: '24px' }}>SANCTUARY</h4>
                    <p style={{ opacity: 0.6, fontSize: '14px', lineHeight: '1.6' }}>
                        Curated collection of eco-luxe retreats in the world's most remote landscapes.
                    </p>
                </div>

                <div>
                    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', opacity: 0.8 }}>Explore</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', opacity: 0.6 }}>
                        <Link href="/destinations">Destinations</Link>
                        <Link href="/journal">Journal</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/sustainability">Sustainability</Link>
                    </div>
                </div>

                <div>
                    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', opacity: 0.8 }}>Stay Connected</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', opacity: 0.6 }}>
                        <Link href="#">Instagram</Link>
                        <Link href="#">Twitter</Link>
                        <Link href="#">Newsletter</Link>
                    </div>
                </div>

                <div>
                    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', opacity: 0.8 }}>Contact</h5>
                    <p style={{ fontSize: '14px', opacity: 0.6, lineHeight: '1.6' }}>
                        hello@sanctuary.com<br />
                        +1 (555) 000-0000
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', fontSize: '12px', opacity: 0.4 }}>
                <span>© 2025 Sanctuary Resorts. All rights reserved.</span>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
