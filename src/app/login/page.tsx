import Link from "next/link";
import styles from "./page.module.css";

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
					<Illustration />
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
						<button type="submit" className={styles.primaryButton}>
							Login
						</button>
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

function Illustration() {
	return (
		<svg
			className={styles.illustrationSvg}
			viewBox="0 0 520 520"
			role="img"
			aria-label="People reviewing a dashboard"
		>
			<defs>
				<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#f6f1ff" />
					<stop offset="100%" stopColor="#e3e7ff" />
				</linearGradient>
				<linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#6b4cff" />
					<stop offset="100%" stopColor="#5437da" />
				</linearGradient>
				<linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#7dd5ff" />
					<stop offset="100%" stopColor="#a5b4ff" />
				</linearGradient>
			</defs>
			<rect x="16" y="24" width="488" height="472" rx="36" fill="url(#bg)" />
			<rect x="110" y="120" width="160" height="260" rx="26" fill="url(#panel)" />
			<rect x="140" y="160" width="100" height="10" rx="5" fill="#e3d9ff" />
			<rect x="140" y="190" width="86" height="10" rx="5" fill="#e3d9ff" />
			<rect x="140" y="220" width="70" height="10" rx="5" fill="#e3d9ff" />
			<circle cx="210" cy="278" r="28" fill="#f6f1ff" />
			<path
				d="M208 262c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18z"
				fill="#7dd5ff"
			/>
			<circle cx="230" cy="278" r="6" fill="#6b4cff" />
			<rect x="322" y="160" width="128" height="72" rx="18" fill="#ffffff" />
			<rect x="336" y="178" width="86" height="10" rx="5" fill="#c6ccff" />
			<rect x="336" y="200" width="60" height="10" rx="5" fill="#c6ccff" />
			<rect x="306" y="280" width="168" height="92" rx="22" fill="#ffffff" />
			<rect x="326" y="300" width="96" height="10" rx="5" fill="#c6ccff" />
			<rect x="326" y="322" width="120" height="10" rx="5" fill="#c6ccff" />
			<circle cx="150" cy="360" r="38" fill="url(#accent)" />
			<path
				d="M150 334c16 0 30 14 30 30s-14 30-30 30-30-14-30-30 14-30 30-30z"
				fill="#ffffff"
				opacity="0.35"
			/>
		</svg>
	);
}
