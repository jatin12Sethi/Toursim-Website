import Navbar from '@/components/Navbar';

export default function Book() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#F9F9F9' }}>
            <nav style={{ padding: '24px 40px', backgroundColor: 'white', borderBottom: '1px solid #EAEAEA', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', letterSpacing: '2px', color: 'var(--color-primary)' }}>SANCTUARY</div>
                <div style={{ fontSize: '12px', color: '#888' }}>SECURE CHECKOUT</div>
            </nav>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '80px', padding: '80px 40px' }}>
                {/* Form */}
                <div>
                    <h1 style={{ fontSize: '40px', fontFamily: 'var(--font-playfair)', marginBottom: '40px' }}>Confirm your stay</h1>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <section>
                            <h3 style={{ fontSize: '18px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Guest Information</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '12px', textTransform: 'uppercase' }}>First Name</label>
                                    <input type="text" style={{ padding: '16px', border: 'none', borderBottom: '1px solid #CCC', backgroundColor: 'transparent', outline: 'none' }} placeholder="John" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '12px', textTransform: 'uppercase' }}>Last Name</label>
                                    <input type="text" style={{ padding: '16px', border: 'none', borderBottom: '1px solid #CCC', backgroundColor: 'transparent', outline: 'none' }} placeholder="Doe" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '24px' }}>
                                <label style={{ fontSize: '12px', textTransform: 'uppercase' }}>Email Address</label>
                                <input type="email" style={{ padding: '16px', border: 'none', borderBottom: '1px solid #CCC', backgroundColor: 'transparent', outline: 'none' }} placeholder="john@example.com" />
                            </div>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '18px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '40px' }}>Payment Details</h3>
                            <div style={{ padding: '24px', border: '1px solid #E5E5E5', backgroundColor: 'white', borderRadius: '4px' }}>
                                <p style={{ color: '#888' }}>Payment integration would go here (Stripe/PayPal).</p>
                            </div>
                        </section>

                        <button className="btn btn-primary" style={{ marginTop: '24px', backgroundColor: '#1B1C1A' }}>Complete Reservation</button>
                    </form>
                </div>

                {/* Summary */}
                <div>
                    <div style={{ padding: '40px', backgroundColor: 'white', border: '1px solid #EAEAEA' }}>
                        <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-playfair)', marginBottom: '24px' }}>Kyoto Retreat</h3>

                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #F5F5F5', marginBottom: '16px' }}>
                            <span style={{ color: '#666' }}>Dates</span>
                            <span>Oct 12 - Oct 15</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #F5F5F5', marginBottom: '16px' }}>
                            <span style={{ color: '#666' }}>Guests</span>
                            <span>2 Adults</span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px', fontSize: '20px', fontWeight: 'bold' }}>
                            <span>Total</span>
                            <span>$1,350.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
