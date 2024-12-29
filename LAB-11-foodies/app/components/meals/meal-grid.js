import MealItem from "./meal-item";
import styles from './meals-grid.module.css';
export default function MealsGrid({meals}){
    return(
        <ul className={styles.meals}>
            {meals.map((meals) => (
                <li key={meals.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}