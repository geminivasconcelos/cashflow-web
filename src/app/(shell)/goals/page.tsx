import styles from "./page.module.css";

const goals = [
  {
    id: "g-1",
    title: "Reserva de Emergência",
    target: 12000,
    current: 5400,
    deadline: "Dez 2026",
    color: "#7a8cf1",
  },
  {
    id: "g-2",
    title: "Viagem Internacional",
    target: 8000,
    current: 3200,
    deadline: "Jul 2026",
    color: "#62d6b5",
  },
  {
    id: "g-3",
    title: "Troca de notebook",
    target: 6000,
    current: 6000,
    deadline: "Mar 2026",
    color: "#f5c66a",
  },
];

const highlights = [
  { label: "Total em metas", value: "$14,600.00", delta: "+2.1%" },
  { label: "Metas concluídas", value: "1", delta: "+1" },
  { label: "Meta mais próxima", value: "Troca de notebook", delta: "" },
];

export default function GoalsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {/* <div>
          <p className={styles.eyebrow}>Metas financeiras</p>
          <h1>Planeje e acompanhe objetivos</h1>
          <p className={styles.subtitle}>Visualize o progresso das metas, defina prioridades e crie novas conquistas.</p>
        </div> */}
        <div className={styles.headerActions}>
          <button className={styles.secondaryButton} type="button">Exportar PDF</button>
          <button className={styles.primaryButton} type="button">Nova meta</button>
        </div>
      </header>

      <section className={styles.highlights}>
        {highlights.map((item) => (
          <article key={item.label} className={styles.highlightCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardLabel}>{item.label}</span>
              {item.delta && <span className={styles.badge}>{item.delta}</span>}
            </div>
            <div className={styles.cardValue}>{item.value}</div>
          </article>
        ))}
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Metas</p>
              <h2>Progresso e prioridades</h2>
            </div>
            <button className={styles.linkButton} type="button">Ver todas</button>
          </header>
          <div className={styles.goalList}>
            {goals.map((goal) => {
              const percent = Math.round((goal.current / goal.target) * 100);
              return (
                <div key={goal.id} className={styles.goalRow}>
                  <div className={styles.goalLeft}>
                    <span className={styles.goalDot} style={{ background: goal.color }} />
                    <div>
                      <div className={styles.goalName}>{goal.title}</div>
                      <div className={styles.muted}>Meta: ${goal.target.toLocaleString()} · Até {goal.deadline}</div>
                    </div>
                  </div>
                  <div className={styles.goalRight}>
                    <div className={styles.goalProgressBar}>
                      <div className={styles.goalProgressFill} style={{ width: `${percent}%`, background: goal.color }} />
                    </div>
                    <span className={styles.muted}>{percent}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
