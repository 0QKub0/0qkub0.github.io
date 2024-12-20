'use client'
export default function About() {
    return (
        <div className="container">
            <h1>O Mnie</h1>
            <p>
                Cześć! Mam na imię Mykyta i jestem pasjonatem technologii oraz rozwoju osobistego. Moją przygodę z programowaniem
                rozpocząłem kilka lat temu i od tego czasu stale poszerzam swoje umiejętności. Wierzę, że technologia ma 
                ogromny potencjał, by zmieniać świat na lepsze.
            </p>
            <p>
                Poza kodowaniem interesuję się nauką, sportem i muzyką. Uwielbiam poznawać nowych ludzi i dzielić się swoją 
                wiedzą z innymi.
            </p>
            <style jsx>{`
                body{
                    width:100%;
                    height:100%:
                    display:flex;
                    justify-items:center;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid var(--foreground);
                    border-radius: 8px;
                    background-color: var(--background);
                    color: var(--foreground);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
            `}</style>
        </div>
    );
}