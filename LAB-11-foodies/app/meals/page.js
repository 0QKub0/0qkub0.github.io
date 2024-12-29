import Link from 'next/link'

export default function MealDetails(){
    return (
        <main>
            <h1>Meals</h1>
            <p>
                <Link href="/meals/burger">Burger</Link>
            </p>
            <p>
                <Link href="/meals/pizza">Pizza</Link>
            </p>
        </main>
    );
}