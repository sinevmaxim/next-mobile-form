import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <h3>What&apos;s your date of birth</h3>
        <p>
          Your birth date reveals your core personality traits, needs and
          desires.
        </p>

        <div className={styles.formWrapper}>
          <input
            className={styles.formTextInput}
            type="text"
            maxLength={4}
            placeholder="YYYY"
          />
          <input
            className={styles.formTextInput}
            type="text"
            maxLength={2}
            placeholder="MM"
          />
          <input
            className={styles.formTextInput}
            type="text"
            maxLength={2}
            placeholder="DD"
          />
          <button className={styles.submitButton}>Next</button>
        </div>
      </div>
    </main>
  );
}
