import styles from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.loader}></div>
        </div>
    )
};