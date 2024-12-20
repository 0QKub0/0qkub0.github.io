'use client';

export default function Interests() {
    return (
        <div className="container">
            <h1>Moje Zainteresowania</h1>
            <p>
                Uwielbiam eksplorować świat technologii, programowania i sztucznej inteligencji. W wolnym czasie
                pasjonuję się fotografią i muzyką. Fascynuje mnie również odkrywanie nowych miejsc i kultur.
            </p>
            <ol>
                <li>Programowanie i tworzenie aplikacji</li>
                <li>Fotografia krajobrazowa</li>
                <li>Gra na trąbce</li>
                <li>Podróże i eksploracja świata</li>
            </ol>
            <style jsx>{`
                body{
                display: flex;
                justify-content: center;
                align-items: center;
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
                }
                ul {
                    list-style: disc;
                    padding-left: 20px;
                }
                li {
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
}