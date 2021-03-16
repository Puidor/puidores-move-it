import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Puidor.png" alt="Carlos Adriano" />
      <div>
        <strong>Carlos Adriano</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
