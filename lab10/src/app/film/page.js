'use client';

export default function FavoriteFilm() {
    return (
        <div className="container">
            <h1>Mój Ulubiony Film</h1>
            <h2>Interstellar</h2>
            <p>
                "Interstellar" to film Christophera Nolana, który opowiada historię misji kosmicznej mającej na celu 
                znalezienie nowego domu dla ludzkości. Film łączy w sobie naukę, emocje i niesamowite efekty wizualne. 
                Jego przesłanie o miłości, poświęceniu i nadziei na przyszłość jest niezwykle poruszające.
            </p>
            <blockquote>
                "Miłość to jedyna rzecz, którą możemy postrzegać poza wymiarami czasu i przestrzeni." 
                – Dr Brand
            </blockquote>
            <style jsx>{`
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
                h2 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                    color: var(--foreground);
                }
                p {
                    font-size: 1.2rem;
                    line-height: 1.6;
                }
                blockquote {
                    margin: 20px 0;
                    padding: 10px 20px;
                    background-color: rgba(0, 123, 255, 0.1);
                    border-left: 4px solid #007bff;
                    font-style: italic;
                    color: var(--foreground);
                }
            `}</style>
        </div>
    );
}