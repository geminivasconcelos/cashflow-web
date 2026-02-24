import styles from "./dashboard/page.module.css";

export default function HeaderActionsMobile() {
  return (
    <div className={styles.headerActionsMobile}>

      
      <button className={styles.notificationButton} type="button">
        <span className="material-symbols-outlined">notifications</span>
      </button>

      <button className={styles.notificationButton} type="button">
        <span className="material-symbols-outlined">settings</span>
      </button>
      <img src="/cashflow.png" alt="" className={styles.imgUser} />
    </div>
  );
}