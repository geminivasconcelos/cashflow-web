
import styles from "./page.module.css";
import Link from "next/link";

const user = {
  name: "Gemini Vasconcelos",
  email: "gemini@email.com",
  avatar: "https://ui-avatars.com/api/?name=Gemini+Vasconcelos&background=7a8cf1&color=fff",
};

const preferences = [
  { id: "p-1", label: "Notificações de gastos", checked: true },
  { id: "p-2", label: "Resumo semanal por e-mail", checked: false },
  { id: "p-3", label: "Alertas de saldo baixo", checked: true },
];

export default function SettingsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1>Configurações</h1>
          <p className={styles.subtitle}>Gerencie preferências, dados pessoais e integrações.</p>
        </div>
      </header>

      <section className={styles.profileSection}>
        <img src={user.avatar} alt={user.name} className={styles.avatar} />
        <div>
          <div className={styles.profileName}>{user.name}</div>
          <div className={styles.profileEmail}>{user.email}</div>
        </div>
        <Link href="/settings/edit-profile" className={styles.editButton}>Editar perfil</Link>
      </section>

      <section className={styles.preferencesSection}>
        <h2>Preferências</h2>
        <div className={styles.preferencesList}>
          {preferences.map((pref) => (
            <label key={pref.id} className={styles.preferenceRow}>
              <input type="checkbox" checked={pref.checked} readOnly />
              <span>{pref.label}</span>
            </label>
          ))}
        </div>
      </section>

      <section className={styles.integrationsSection}>
        <h2>Integrações</h2>
        <div className={styles.integrationsList}>
          <div className={styles.integrationRow}>
            <span>Google Sheets</span>
            <button className={styles.connectButton} type="button">Conectar</button>
          </div>
          <div className={styles.integrationRow}>
            <span>Banco Itaú</span>
            <button className={styles.connectButton} type="button">Conectar</button>
          </div>
        </div>
      </section>
    </div>
  );
}
