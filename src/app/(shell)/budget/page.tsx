import styles from "./page.module.css";

const budgets = [
  {
    id: "b-1",
    title: "Alimentação",
    limit: 1200,
    spent: 860,
    color: "#7a8cf1",
  },
  {
    id: "b-2",
    title: "Transporte",
    limit: 600,
    spent: 420,
    color: "#62d6b5",
  },
  {
    id: "b-3",
    title: "Lazer",
    limit: 800,
    spent: 320,
    color: "#f5c66a",
  },
];

const highlights = [
  { label: "Total de orçamento", value: "$2,600.00", delta: "+1.8%" },
  { label: "Gasto mensal", value: "$1,600.00", delta: "-0.9%" },
  { label: "Categoria mais usada", value: "Alimentação", delta: "" },
];

export default function BudgetPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Orçamentos</p>
          <h1>Controle de gastos e limites</h1>
          <p className={styles.subtitle}>Defina limites por categoria, acompanhe gastos e otimize seu planejamento.</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryButton} type="button">Exportar PDF</button>
          <button className={styles.primaryButton} type="button">Novo orçamento</button>
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
              <p className={styles.cardLabel}>Categorias</p>
              <h2>Limites e gastos</h2>
            </div>
            <button className={styles.linkButton} type="button">Ver todas</button>
          </header>
          <div className={styles.budgetList}>
            {budgets.map((budget) => {
              const percent = Math.round((budget.spent / budget.limit) * 100);
              return (
                <div key={budget.id} className={styles.budgetRow}>
                  <div className={styles.budgetLeft}>
                    <span className={styles.budgetDot} style={{ background: budget.color }} />
                    <div>
                      <div className={styles.budgetName}>{budget.title}</div>
                      <div className={styles.muted}>Limite: ${budget.limit.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className={styles.budgetRight}>
                    <div className={styles.budgetProgressBar}>
                      <div className={styles.budgetProgressFill} style={{ width: `${percent}%`, background: budget.color }} />
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
