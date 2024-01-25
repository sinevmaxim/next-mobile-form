"use client";
import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";

interface IBirthday {
    year: string;
    month: string;
    day: string;
}

export default function Home() {
    const progressBar = useRef<HTMLDivElement>(null);
    const [birthday, setBirthday] = useState<IBirthday>({
        year: "",
        month: "",
        day: "",
    });

    const [isErrorOccured, setIsErrorOccured] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        let progressAmount: number = 0;

        if (birthday.year !== "") progressAmount++;
        if (birthday.month !== "") progressAmount++;
        if (birthday.day !== "") progressAmount++;

        if (progressBar.current)
            progressBar.current.style.width = `${progressAmount * 11}%`;
    }, [birthday]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result:string = e.target.value.replace(/\D/g, "");

        setBirthday((prevState: IBirthday) => ({
            ...prevState,
            [e.target.name]: result,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(birthday);
        let year = parseInt(birthday.year);
        let month = parseInt(birthday.month);
        let day = parseInt(birthday.day);

        if (year < 1900 || year > new Date().getFullYear()) {
            setIsErrorOccured(true);
            setErrorMessage('An error occured in "Year" field');
            return;
        }
        if (month <= 0 || month > 12) {
            setIsErrorOccured(true);
            setErrorMessage('An error occured in "Month" field');
            return;
        }

        if (day <= 0 || day > 31) {
            setIsErrorOccured(true);
            setErrorMessage('An error occured in "Day" field');
            return;
        }

        setIsErrorOccured(false);
        setErrorMessage("");
    };

    return (
        <main>
            <div className={styles.navBar}></div>
            <div className={styles.wrapper}>
                <div className={styles.progressContainer}>
                    <div ref={progressBar} className={styles.progress}></div>
                    <div className={styles.step_active}>1</div>
                    <div className={styles.step}>2</div>
                    <div className={styles.step}>3</div>
                    <div className={styles.step}>4</div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.headerText}>
                        What&apos;s your date of birth
                    </h3>
                    <p className={styles.descriptionText}>
                        Your birth date reveals your core personality traits,
                        needs and desires.
                    </p>

                    <div className={styles.formWrapper}>
                        <div className={styles.inputWrapper}>
                            <label className={styles.inputLabel}>Year</label>
                            <input
                                className={styles.formTextInput}
                                type="text"
                                name="year"
                                maxLength={4}
                                placeholder="YYYY"
                                inputMode="numeric"
                                onChange={handleChange}
                                value={birthday.year}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label className={styles.inputLabel}>Month</label>
                            <input
                                className={styles.formTextInput}
                                type="text"
                                name="month"
                                maxLength={2}
                                placeholder="MM"
                                inputMode="numeric"
                                onChange={handleChange}
                                value={birthday.month}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label className={styles.inputLabel}>Day</label>
                            <input
                                className={styles.formTextInput}
                                type="text"
                                name="day"
                                maxLength={2}
                                placeholder="DD"
                                inputMode="numeric"
                                onChange={handleChange}
                                value={birthday.day}
                            />
                        </div>

                        <button
                            className={styles.submitButton}
                            onClick={handleSubmit}
                        >
                            Next
                        </button>
                    </div>
                    {isErrorOccured && (
                        <div className={styles.errorMessage}>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
