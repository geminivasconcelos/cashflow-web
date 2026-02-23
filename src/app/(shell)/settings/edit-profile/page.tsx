"use client";
import styles from "./edit-profile.module.css";
import { useState } from "react";
import Link from "next/link";

const user = {
  firstName: "Gemini",
  lastName: "Vasconcelos",
  email: "gemini@email.com",
  avatar: "https://ui-avatars.com/api/?name=Gemini+Vasconcelos&background=7a8cf1&color=fff",
};

export default function EditProfilePage() {
  const [avatar, setAvatar] = useState(user.avatar);
  const [emailEdit, setEmailEdit] = useState(false);

  return (
    <div className={styles.pageFull}>
      <header className={styles.header}>
        <Link href="/settings" className={styles.backButton}>
          ← Voltar para Settings
        </Link>
        <h1>Account</h1>
      </header>

      <form className={styles.formFull}>
        {/* Profile Picture Section */}
        <section className={styles.section}>
          <div className={styles.avatarBlock}>
            <img src={avatar} alt={user.firstName + ' ' + user.lastName} className={styles.avatarLarge} />
            <div className={styles.avatarActions}>
              <button className={styles.uploadButton} type="button">Upload Image</button>
              <button className={styles.removeButton} type="button">Remove</button>
              <div className={styles.avatarHelp}>We support PNGs, JPEGs and GIFs under 10MB</div>
            </div>
          </div>
        </section>

        {/* Name & Email Section */}
        <section className={styles.section}>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>First Name</label>
              <input type="text" value={user.firstName} readOnly />
            </div>
            <div className={styles.inputGroup}>
              <label>Last Name</label>
              <input type="text" value={user.lastName} readOnly />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" value={user.email} readOnly={!emailEdit} />
            <button className={styles.editEmailButton} type="button" onClick={() => setEmailEdit(!emailEdit)}>
              {emailEdit ? "Save" : "Edit Email"}
            </button>
            <div className={styles.inputHelp}>You can update your email address.</div>
          </div>
        </section>

        {/* Password Section */}
        <section className={styles.sectionPassword}>
          <div className={styles.passwordBlock}>
            <span className={styles.passwordLabel}>Password</span>
            <button className={styles.changePasswordButton} type="button">Change Password</button>
          </div>
        </section>
      </form>
    </div>
  );
}
