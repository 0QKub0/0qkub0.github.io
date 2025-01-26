// app/meals/[slug]/page.js
import styles from './page.module.css'; // Import your CSS module
import { getMeal } from '@/lib/meals';

export default async function MealPage({ params }) {
  // `params.slug` is the dynamic segment from the URL
  const meal = await getMeal(params.slug);

  // Handle the case where no meal was found
  if (!meal) {
    return <p className={styles.loading}>No meal found for slug: {params.slug}</p>;
  }

  return (
    <>
      {/* Header section */}
      <header className={styles.header}>
        <div className={styles.image}>
          <img src={meal.image} alt={meal.title} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.summary}>{meal.summary}</p>
          <p className={styles.creator}>
            Created by{' '}
            <a href={`mailto:${meal.creator_email}`}>
              {meal.creator}
            </a>
          </p>
        </div>
      </header>

      {/* Instructions section */}
      <article className={styles.instructions}>
        <h2>Instructions</h2>
        <pre>{meal.instructions}</pre>
      </article>
    </>
  );
}