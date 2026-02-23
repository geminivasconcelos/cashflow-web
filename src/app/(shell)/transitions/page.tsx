import styles from "./page.module.css";

const highlights = [
  { label: "Receita", value: "$18,240.00", delta: "+4.3%" },
  { label: "Despesas", value: "$12,780.00", delta: "-1.8%" },
  { label: "Saldo projetado", value: "$5,460.00", delta: "+2.1%" },
];

const filters = ["Todos", "Pagos", "Pendentes", "Agendados"];

const transactions = [
  {
    id: "tx-01",
    name: "Assinatura Notion",
    category: "Produtividade",
    method: "VISA *2331",
    amount: "-$12.00",
    status: "Pago",
    date: "Hoje, 09:32",
    color: "#7a8cf1",
  },
  {
    id: "tx-02",
    name: "Supermercado Central",
    category: "Mercado",
    method: "Mastercard *9823",
    amount: "-$156.80",
    status: "Pago",
    date: "Ontem, 18:15",
    color: "#62d6b5",
  },
  {
    id: "tx-03",
    name: "Salário",
    category: "Entrada",
    method: "Depósito",
    amount: "+$4,500.00",
    status: "Recebido",
    date: "Ontem, 07:10",
    color: "#f5c66a",
  },
  {
    id: "tx-04",
    name: "Conta de energia",
    category: "Casa",
    method: "Débito automático",
    amount: "-$210.40",
    status: "Pendente",
    date: "25 Jul, 12:00",
    color: "#f18fb5",
  },
  {
    id: "tx-05",
    name: "Viagem - hotéis",
    category: "Viagem",
    method: "VISA *2331",
    amount: "-$780.00",
    status: "Agendado",
    date: "28 Jul, 06:30",
    color: "#9a7cf1",
  },
];

const timeline = [
  { id: "tl-01", title: "Revisar assinaturas", time: "09:00", detail: "Cancelar as não usadas" },
  { id: "tl-02", title: "Confirmar pendentes", time: "13:30", detail: "2 contas aguardando pagamento" },
  { id: "tl-03", title: "Fechar orçamento", time: "18:00", detail: "Enviar para Ana" },
];

export default function TransitionsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.shell}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Fluxo financeiro</p>
            <h1>Transações e movimentações</h1>
            <p className={styles.subtitle}>
              Acompanhe entradas, saídas e pendências em tempo real.
            </p>
          </div>
          <div className={styles.actions}>
            <input className={styles.search} placeholder="Buscar por nome ou categoria" aria-label="Buscar" />
            <button className={styles.secondaryButton} type="button">
              Exportar CSV
            </button>
            <button className={styles.primaryButton} type="button">
              Nova transação
            </button>
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

        <section className={styles.filters}>
          <div className={styles.filterGroup}>
            {filters.map((item, idx) => (
              <button
                key={item}
                className={`${styles.pill} ${idx === 0 ? styles.pillActive : ""}`}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          <div className={styles.switches}>
            <label className={styles.switchLabel}>
              <input type="checkbox" defaultChecked />
              <span>Mostrar apenas categorias principais</span>
            </label>
            <label className={styles.switchLabel}>
              <input type="checkbox" />
              <span>Ocultar itens reconciliados</span>
            </label>
          </div>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardLabel}>Tabela</p>
                <h2>Últimas transações</h2>
              </div>
              <div className={styles.tableLegend}>
                <span className={styles.dot} style={{ background: "#7a8cf1" }} />Entrada
                <span className={styles.dot} style={{ background: "#f18fb5" }} />Saída
              </div>
            </div>
            <div className={styles.table} role="table" aria-label="Lista de transações">
              <div className={styles.tableHead} role="row">
                <span role="columnheader">Data</span>
                <span role="columnheader">Descrição</span>
                <span role="columnheader">Categoria</span>
                <span role="columnheader">Método</span>
                <span role="columnheader">Status</span>
                <span role="columnheader" className={styles.alignEnd}>Valor</span>
              </div>
              {transactions.map((tx) => (
                <div key={tx.id} className={styles.tableRow} role="row">
                  <span>{tx.date}</span>
                  <div className={styles.txName}>
                    <span className={styles.txDot} style={{ background: tx.color }} aria-hidden />
                    <span>{tx.name}</span>
                  </div>
                  <span className={styles.muted}>{tx.category}</span>
                  <span className={styles.muted}>{tx.method}</span>
                  <span className={styles.chip}>{tx.status}</span>
                  <span className={`${styles.amount} ${tx.amount.startsWith("+") ? styles.amountIn : styles.amountOut}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <div className={styles.stack}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.cardLabel}>Foco de hoje</p>
                  <h2>Checklist</h2>
                </div>
                <span className={styles.badgeMuted}>3 tarefas</span>
              </div>
              <div className={styles.timeline}>
                {timeline.map((item, idx) => (
                  <div key={item.id} className={styles.timelineItem}>
                    <div className={styles.timelineBullet} aria-hidden />
                    {idx < timeline.length - 1 && <span className={styles.timelineLine} aria-hidden />}
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineTop}>
                        <span>{item.title}</span>
                        <span className={styles.badgeMuted}>{item.time}</span>
                      </div>
                      <p className={styles.muted}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <p className={styles.cardLabel}>Alertas</p>
                  <h2>Itens a acompanhar</h2>
                </div>
              </div>
              <ul className={styles.alerts}>
                <li>
                  <span className={styles.dot} style={{ background: "#f18fb5" }} />
                  Limite do cartão corporativo atingiu 82%.
                  <button className={styles.linkButton} type="button">Ver cartões</button>
                </li>
                <li>
                  <span className={styles.dot} style={{ background: "#f5c66a" }} />
                  Há 4 reembolsos aguardando aprovação.
                  <button className={styles.linkButton} type="button">Abrir fila</button>
                </li>
                <li>
                  <span className={styles.dot} style={{ background: "#62d6b5" }} />
                  Orçamento de viagens abaixo do planejado.
                  <button className={styles.linkButton} type="button">Ajustar metas</button>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
