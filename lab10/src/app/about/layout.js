'use client'
export default function AboutLayout({ children }) {
    return (
        <div className="about-layout">
            {children}
            <style jsx>{`
                .about-layout {
                    font-family: Arial, Helvetica, sans-serif;
                    color: #ffffff;
                    padding: 20px;
                    min-height: 100vh;
                    text-align: center;
                }
                h1 {
                    font-size: 3rem;
                    color: #a8dadc;
                }
                p {
                    font-size: 1.2rem;
                    line-height: 1.6;
                }
            `}</style>
        </div>
    );
}