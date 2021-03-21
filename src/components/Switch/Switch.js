import styles from "./Switch.module.css";

export function Switch({ defaultChecked, onSwitch }) {
  return (
    <div className={styles.switch}>
      <label className={styles.label}>
        <input defaultChecked={defaultChecked} onChange={onSwitch} className={styles.input} type="checkbox" />
        <div className={styles.slider}></div>
      </label>
      <em className={styles.text}>Enable Dark Mode!</em>
    </div>
  );
}
