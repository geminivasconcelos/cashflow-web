import styles from "./page.module.css";

const wallets = [
  { name: "Cartão Corporativo", masked: "•••• 1289", balance: "$12,430.00", limit: "$20,000", type: "Crédito", color: "#7a8cf1" },
  { name: "Conta Corrente", masked: "•••• 7781", balance: "$6,320.00", limit: "—", type: "Débito", color: "#62d6b5" },
  { name: "Carteira Viagens", masked: "•••• 4410", balance: "$2,480.00", limit: "$5,000", type: "Pré-pago", color: "#f5c66a" },
];

const highlights = [
  { label: "Saldo total", value: "$21,230.00", delta: "+3.2%" },
  { label: "Disponível em crédito", value: "$12,430.00", delta: "-1.1%" },
  { label: "Gasto semanal", value: "$2,180.00", delta: "+4.5%" },
];

const recent = [
  { id: "r-1", title: "Uber Business", date: "Hoje, 10:12", amount: "-$18.40", method: "Cartão Corporativo", color: "#7a8cf1" },
  { id: "r-2", title: "Almoço equipe", date: "Ontem, 13:05", amount: "-$86.00", method: "Conta Corrente", color: "#62d6b5" },
  { id: "r-3", title: "Reembolso recebido", date: "Ontem, 09:20", amount: "+$240.00", method: "Carteira Viagens", color: "#f5c66a" },
];

const limits = [
  { label: "Cartão Corporativo", used: 62, color: "#7a8cf1" },
  { label: "Carteira Viagens", used: 48, color: "#f5c66a" },
  { label: "Conta Corrente", used: 28, color: "#62d6b5" },
];

export default function WalletPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {/* <div>
          <p className={styles.eyebrow}>Carteiras e cartões</p>
          <h1>Gerencie limites e saldos</h1>
          <p className={styles.subtitle}>Visualize rapidamente o saldo disponível, cartões e atividades recentes.</p>
        </div> */}
        <div className={styles.headerActions}>
          <button className={styles.secondaryButton} type="button">Exportar PDF</button>
          <button className={styles.primaryButton} type="button">Adicionar carteira</button>
        </div>
      </header>

      <section className={styles.highlights}>
        {highlights.map((item) => (
          <article key={item.label} className={styles.highlightCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardLabel}>{item.label}</span>
              <span className={styles.badge}>{item.delta}</span>
            </div>
            <div className={styles.cardValue}>{item.value}</div>
          </article>
        ))}
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Carteiras</p>
              <p className={styles.titleCard}>Cartões e contas</p>
            </div>
            <button className={styles.linkButton} type="button">Ver todos</button>
          </header>

          <div className={styles.walletList}>
            {wallets.map((wallet) => (
              <div key={wallet.name} className={styles.walletRow}>
                <div className={styles.walletLeft}>
                  <span className={styles.walletDot} style={{ background: wallet.color }} />
                  <div>
                    <div className={styles.walletName}>{wallet.name}</div>
                    <div className={styles.muted}>{wallet.masked} · {wallet.type}</div>
                  </div>
                </div>
                <div className={styles.walletRight}>
                  <div className={styles.walletBalance}>{wallet.balance}</div>
                  <span className={styles.muted}>Limite {wallet.limit}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Limites</p>
              <p className={styles.titleCard}>Uso por carteira</p>
            </div>
          </header>
          <div className={styles.limits}>
            {limits.map((limit) => (
              <div key={limit.label} className={styles.limitRow}>
                <div className={styles.limitTop}>
                  <span className={styles.limitLabel}>{limit.label}</span>
                  <span className={styles.muted}>{limit.used}%</span>
                </div>
                <div className={styles.limitBar}>
                  <div className={styles.limitFill} style={{ width: `${limit.used}%`, background: limit.color }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className={styles.gridActivity}>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Atividade</p>
              <p className={styles.titleCard}>Movimentações recentes</p>
            </div>
            <button className={styles.linkButton} type="button">Ver extrato</button>
          </header>
          <div className={styles.table}>
            <div className={styles.tableHead}>
              <span>Data</span>
              <span>Descrição</span>
              <span>Método</span>
              <span className={styles.alignEnd}>Valor</span>
            </div>
            {recent.map((item) => (
              <div key={item.id} className={styles.tableRow}>
                <span>{item.date}</span>
                <div className={styles.txName}>
                  <span className={styles.txDot} style={{ background: item.color }} />
                  <span>{item.title}</span>
                </div>
                <span className={styles.muted}>{item.method}</span>
                <span className={`${styles.amount} ${item.amount.startsWith("+") ? styles.amountIn : styles.amountOut}`}>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </article>

        {/* <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Ações rápidas</p>
              <h2>Gerencie cartões</h2>
            </div>
          </header>
          <div className={styles.actionsGrid}>
            <button className={styles.actionButton} type="button">Emitir novo cartão</button>
            <button className={styles.actionButton} type="button">Aumentar limite</button>
            <button className={styles.actionButton} type="button">Bloquear temporariamente</button>
            <button className={styles.actionButton} type="button">Trocar cartão virtual</button>
          </div>
          <div className={styles.note}>Dica: configure alertas de gasto para cada carteira.</div>
        </article> */}
      </section>
    </div>
  );
}
