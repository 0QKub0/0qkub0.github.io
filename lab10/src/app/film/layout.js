'use client'
export default function FilmLayout({ children }) {
    return (
        <div className="film-layout">
            {children}
            <style jsx>{`
                .film-layout {
                    font-family: 'Georgia', serif;
                    color: #264653;
                    padding: 20px;
                    min-height: 100vh;
                }
                h1 {
                    font-size: 2.5rem;
                    color: #e76f51;
                }
            `}</style>
        </div>
    );
}