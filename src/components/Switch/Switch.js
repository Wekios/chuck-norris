import styles from "./Switch.module.css";

export function Switch({ onSwitch }) {
  return (
    <div className={styles.switch}>
      <label className={styles.label}>
        <input onChange={onSwitch} className={styles.input} type="checkbox" />
        <div className={styles.slider}></div>
      </label>
      <em className={styles.text}>Enable Dark Mode!</em>
    </div>
  );
}
