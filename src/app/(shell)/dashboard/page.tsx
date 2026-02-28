import styles from "./page.module.css";

const summaryCards = [
  {
    label: "Total balance",
    value: "$15,700.00",
    delta: "+12.1% vs last month",
    positive: true,
  },
  {
    label: "Income",
    value: "$8,500.00",
    delta: "+6.3% vs last month",
    positive: true,
  },
  {
    label: "Expense",
    value: "$6,222.00",
    delta: "-2.4% vs last month",
    positive: false,
  },
  {
    label: "Total savings",
    value: "$32,913.00",
    delta: "+12.1% vs last month",
    positive: true,
  },
];

const moneyFlow = [
  { label: "Jan", income: 6500, expense: 3200 },
  { label: "Feb", income: 7200, expense: 3400 },
  { label: "Mar", income: 10000, expense: 5200 },
  { label: "Apr", income: 9800, expense: 5100 },
  { label: "May", income: 8900, expense: 4300 },
  { label: "Jun", income: 7500, expense: 4000 },
  { label: "Jul", income: 8200, expense: 4100 },
];

const transactions = [
  {
    date: "25 Jul 12:30",
    amount: "$10",
    name: "YouTube",
    method: "VISA *3254",
    category: "Subscription",
    color: "#7c8cf1",
  },
  {
    date: "26 Jul 15:00",
    amount: "$150",
    name: "Reserved",
    method: "Mastercard *2154",
    category: "Shopping",
    color: "#f18fb5",
  },
  {
    date: "27 Jul 9:00",
    amount: "$80",
    name: "Yaposhka",
    method: "Mastercard *2154",
    category: "Cafe & Restaurants",
    color: "#7c8cf1",
  },
];

const budgetCategories = [
  { label: "Cafe & Restaurants", color: "#7c8cf1" },
  { label: "Entertainment", color: "#f18fb5" },
  { label: "Investments", color: "#62d6b5" },
  { label: "Food & Groceries", color: "#f5c66a" },
  { label: "Health & Beauty", color: "#d0d3ff" },
  { label: "Traveling", color: "#9a7cf1" },
];

const savingGoals = [
  { title: "MacBook Pro", value: "$1,650", progress: 25, bar: "#7c8cf1" },
  { title: "New car", value: "$60,000", progress: 42, bar: "#9a7cf1" },
  { title: "New house", value: "$150,000", progress: 3, bar: "#f5c66a" },
];

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      

      <section>
        <div className={styles.headerActions}>
          <span className={styles.headerActionsPeriodSpan}>Período de Gastos</span>
           <input
            className={styles.inputOutilined}
            type="date"
            aria-label="Select month"
          />
          <span className={styles.headerActionsPeriodSpan}>até</span>
          <input
            className={styles.inputOutilined}
            type="date"
            aria-label="Select month"
          />
          {/* <button className={styles.primaryButton} type="button">
            Add new widget
          </button> */}

          <button className={styles.primaryButton}>To look for</button>
        </div>
      </section>

      <section className={styles.summaryGrid}>
        {summaryCards.map((card) => (
          <article key={card.label} className={styles.summaryCard}>
            <header>
              <span className={styles.summaryLabel}>{card.label}</span>
              <span className={styles.iconCircle}>↗</span>
            </header>
            <div className={styles.summaryValue}>{card.value}</div>
            <div
              className={
                card.positive ? styles.deltaPositive : styles.deltaNegative
              }
            >
              {card.delta}
            </div>
          </article>
        ))}
      </section>

      <section className={styles.gridTwoCols}>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.cardTitle}>Money flow</div>
            <div className={styles.cardFilters}>
              <button className={styles.buttonGridTwoCols}>Income</button>
              <button className={styles.buttonGridTwoCols}>Expense</button>
              <button className={styles.buttonGridTwoCols}>All accounts</button>
              <button className={styles.buttonGridTwoCols}>This year</button>
            </div>
          </header>
          <div className={styles.chartBars}>
            {moneyFlow.map((item) => (
              <div key={item.label} className={styles.barGroup}>
                <div
                  className={styles.barIncome}
                  style={{ height: `${(item.income / 11000) * 100}%` }}
                  aria-label={`Income ${item.income}`}
                />
                <div
                  className={styles.barExpense}
                  style={{ height: `${(item.expense / 11000) * 100}%` }}
                  aria-label={`Expense ${item.expense}`}
                />
                <span className={styles.barLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.cardTitle}>Budget</div>
            <span className={styles.iconCircle}>↗</span>
          </header>
          <div className={styles.budgetRow}>
            <div className={styles.budgetRing}>
              <div className={styles.ringOuter}>
                <div className={styles.ringInner}>$5,950.00</div>
              </div>
              <p>Total for month</p>
            </div>
            <ul className={styles.budgetLegend}>
              {budgetCategories.map((item) => (
                <li key={item.label}>
                  <span
                    className={styles.legendDot}
                    style={{ background: item.color }}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className={styles.gridTwoCols}>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.cardTitle}>Recent transactions</div>
            <span className={styles.filterTag}>All accounts</span>
          </header>
          <div className={styles.table}>
            <div className={styles.tableHead}>
              <span>Date</span>
              <span>Amount</span>
              <span>Payment name</span>
              <span>Method</span>
              <span>Category</span>
            </div>
            {transactions.map((tx) => (
              <div key={tx.date + tx.name} className={styles.tableRow}>
                <span>{tx.date}</span>
                <span className={styles.amount}>{tx.amount}</span>
                <span>{tx.name}</span>
                <span>{tx.method}</span>
                <span
                  className={styles.chip}
                  style={{ background: `${tx.color}22`, color: tx.color }}
                >
                  {tx.category}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.cardTitle}>Saving goals</div>
            <span className={styles.iconCircle}>↗</span>
          </header>
          <div className={styles.goalsList}>
            {savingGoals.map((goal) => (
              <div key={goal.title} className={styles.goalRow}>
                <div className={styles.goalTop}>
                  <span>{goal.title}</span>
                  <span className={styles.amount}>{goal.value}</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${goal.progress}%`, background: goal.bar }}
                  />
                </div>
                <span className={styles.goalPercent}>{goal.progress}%</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
