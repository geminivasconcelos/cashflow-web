
"use client";
import styles from "./page.module.css";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const highlights = [
  { label: "Receita mensal", value: "$8,200.00", delta: "+4.2%" },
  { label: "Despesas mensais", value: "$6,100.00", delta: "-2.1%" },
  { label: "Saldo líquido", value: "$2,100.00", delta: "+1.7%" },
];

// Mock data
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Receita",
      data: [700, 900, 1200, 1100, 1400, 1300, 1500, 1600, 1700, 1800, 1900, 2000],
      backgroundColor: "#7a8cf1",
    },
    {
      label: "Despesa",
      data: [500, 600, 800, 900, 1000, 950, 1100, 1200, 1300, 1400, 1450, 1500],
      backgroundColor: "#62d6b5",
    },
  ],
};

const pieData = {
  labels: ["Alimentação", "Transporte", "Lazer", "Saúde", "Educação"],
  datasets: [
    {
      data: [420, 320, 180, 220, 110],
      backgroundColor: ["#7a8cf1", "#62d6b5", "#f5c66a", "#ff7a7a", "#a1e3a1"],
    },
  ],
};

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Saldo acumulado",
      data: [200, 400, 700, 900, 1200, 1500, 1700, 1900, 2100, 2300, 2500, 2700],
      borderColor: "#f5c66a",
      backgroundColor: "rgba(245,198,106,0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export default function AnalyticsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Analytics</p>
          <h1>Visualize tendências e insights</h1>
          <p className={styles.subtitle}>Acompanhe gráficos, indicadores e descubra oportunidades de otimização financeira.</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.secondaryButton} type="button">Exportar PDF</button>
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
              <p className={styles.cardLabel}>Receita x Despesa</p>
              <span className={styles.muted}>Comparativo mensal de entradas e saídas.</span>
            </div>
          </header>
          <div className={styles.chartPlaceholder}>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Evolução dos gastos geral</p>
              <span className={styles.muted}>Gastos totais mês a mês.</span>
            </div>
          </header>
          <div className={styles.chartPlaceholder}>
            <Line
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                  {
                    label: "Gastos",
                    data: [500, 600, 800, 900, 1000, 950, 1100, 1200, 1300, 1400, 1450, 1500],
                    borderColor: "#dc2626",
                    backgroundColor: "rgba(220,38,38,0.15)",
                    fill: true,
                    tension: 0.4,
                  },
                ],
              }}
              options={{ responsive: true, plugins: { legend: { display: true } } }}
            />
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Evolução dos gastos por categoria</p>
              <span className={styles.muted}>Gastos mensais por categoria.</span>
            </div>
          </header>
          <div className={styles.chartPlaceholder}>
            <Line
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                  {
                    label: "Alimentação",
                    data: [120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230],
                    borderColor: "#7a8cf1",
                    backgroundColor: "rgba(122,140,241,0.15)",
                    fill: false,
                  },
                  {
                    label: "Transporte",
                    data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
                    borderColor: "#62d6b5",
                    backgroundColor: "rgba(98,214,181,0.15)",
                    fill: false,
                  },
                  {
                    label: "Lazer",
                    data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
                    borderColor: "#f5c66a",
                    backgroundColor: "rgba(245,198,106,0.15)",
                    fill: false,
                  },
                ],
              }}
              options={{ responsive: true, plugins: { legend: { display: true } } }}
            />
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Categorias de gasto</p>
              <span className={styles.muted}>Distribuição dos gastos por categoria.</span>
            </div>
          </header>
          <div className={styles.chartPlaceholder}>
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: "right" } } }} />
          </div>
        </article>

        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <p className={styles.cardLabel}>Evolução do saldo</p>
              <span className={styles.muted}>Saldo acumulado ao longo do ano.</span>
            </div>
          </header>
          <div className={styles.chartPlaceholder}>
            <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>
        </article>
      </section>
    </div>
  );
}
