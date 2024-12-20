'use client'

export default function InterestsLayout({ children }) {
    return (
        <div className="interests-layout">
            {children}
            <style jsx>{`
                .interests-layout {
                    font-family: 'Courier New', Courier, monospace;
                    color: #2a9d8f;
                    padding: 20px;
                    min-height: 100vh;
                }
            `}</style>
        </div>
    );
}