import DishInventory from '@/data/DishInventory';
import Nutrition from '@/components/Nutrition/Nutrition';
import Button from '@/components/Button';
import styles from '@/styles/Description.module.css';
import { useState } from 'react';

export default function Description() {
    const [showNutrition, setShowNutrition] = useState(false);
    const { name, description, categories, image } = DishInventory;

    const categoryTags = categories.map((category, index) => (
        <div key={index} className={styles.category}>
            <span className={styles.categoryText}>{category}</span>
        </div>
    ));

    return(
        <>
            <main className={styles.main}>
                <div className={styles.descriptionContainer}>
                    <div className={styles.imageContainer}>
                        <img
                            src={image}
                            alt={name}
                            className={styles.dishImage}
                        />
                    </div>
                    <div className={styles.descriptionCard}>
                        <div className={styles.row1}>
                            <div className={styles.dishName}><h2>{name}</h2></div>
                            <button onClick={() => setShowNutrition(true)} className={styles.nutritionButton}>Nutrition</button>
                        </div>
                        <div className={styles.categories}>{categoryTags}</div>
                        <div className={styles.dishDescription}>{description}</div>
                        <div className={styles.buttonContainer}>
                            <Button placeholder="Find Near Me" />
                            <Button placeholder="Recipe" />
                        </div>
                    </div>

                    {showNutrition && (
                        <div className={styles.nutritionPopup}>
                            <button className={styles.closeButton} onClick={() => setShowNutrition(false)}>X</button>
                            <Nutrition />
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
