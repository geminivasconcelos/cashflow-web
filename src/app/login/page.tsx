import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Login | Cashflow",
  description: "Access your Cashflow account",
};

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.illustration}>
          <div className={styles.illustrationGlow} aria-hidden="true" />
         
          <img
            src="/cashflow.png"
            alt="Login illustration"
            className={styles.imgCashflow}
          />
        </section>

        <section className={styles.formSection}>
          <header className={styles.header}>
            <p>Hello,</p>
            <h1>Welcome back</h1>
          </header>

          <form className={styles.form}>
            <label className={styles.field}>
              <span>Username or email</span>
              <input
                type="text"
                name="email"
                placeholder="yourname@cashflow.com"
                autoComplete="username"
              />
            </label>
            <label className={styles.field}>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </label>
            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className={styles.linkButton}>
                Forgot password?
              </Link>
            </div>

						<div className={styles.containerButton}>

            <button type="submit" className={styles.primaryButton}>
              Login
            </button>
						</div>
          </form>

          <p className={styles.footerText}>
            Do not have an account?{" "}
            <Link href="/register" className={styles.linkButton}>
              Click here
            </Link>
          </p>
          <div className={styles.storeButtons}>
            <button className={styles.storeButton} type="button">
              App Store
            </button>
            <button className={styles.storeButton} type="button">
              Google Play
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
