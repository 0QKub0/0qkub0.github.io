import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '../components/meals/meal-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />

}
export default function MealDetails() {
    return (
        <>
            <header className={styles.header}>
                <h1>Delicious Meals, Created {''}</h1>
                <span className={styles.highlight}>by you</span>
                <p>
                    Choose your favourite recipe and cook it yourself. It is easy and fun!
                </p>
                <p>
                    <Link href="/meals/share">
                        Share Your favourite recipe
                    </Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}