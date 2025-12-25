import Navbar from '@/components/Navbar';
import Image from 'next/image';

const stories = [
    { id: 1, title: "The Art of Doing Nothing", date: "Oct 12, 2024", category: "Wellness", excerpt: "Why silence is the ultimate luxury in a noisy world.", image: "/journal.png" },
    { id: 2, title: "Sustainable Architecture", date: "Sep 28, 2024", category: "Design", excerpt: "How we build without leaving a trace.", image: "/journal_1.png" },
    { id: 3, title: "Foraging in Kyoto", date: "Sep 15, 2024", category: "Food", excerpt: "A morning walk with our resident chef.", image: "/journal_2.png" },
    { id: 4, title: "Under the Northern Lights", date: "Aug 30, 2024", category: "Travel", excerpt: "A guide to the celestial season.", image: "/journal_3.png" },
];

export default function Journal() {
    return (
        <main style={{ backgroundColor: '#F9F9F9', minHeight: '100vh', paddingBottom: '120px' }}>
            {/* Dark styling for Nav since header is light */}
            <div style={{ backgroundColor: '#1B1C1A' }}>
                <Navbar />
            </div>

            <div className="container" style={{ paddingTop: '160px' }}>
                <h1 style={{ fontSize: '64px', fontFamily: 'var(--font-playfair)', marginBottom: '80px', textAlign: 'center' }}>The Journal</h1>

                <div className="grid-cols-2">
                    {stories.map((story) => (
                        <article key={story.id} style={{ cursor: 'pointer' }}>
                            <div style={{ height: '400px', backgroundColor: '#E5E5E5', marginBottom: '32px', position: 'relative', overflow: 'hidden' }}>
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', opacity: 0.6 }}>
                                <span>{story.category}</span>
                                <span>—</span>
                                <span>{story.date}</span>
                            </div>
                            <h2 style={{ fontSize: '40px', fontFamily: 'var(--font-playfair)', marginBottom: '16px', lineHeight: 1.2 }}>{story.title}</h2>
                            <p style={{ fontSize: '18px', lineHeight: 1.6, opacity: 0.8 }}>{story.excerpt}</p>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
