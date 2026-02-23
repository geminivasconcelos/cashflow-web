

"use client";
import styles from "./edit-profile.module.css";
import { useState } from "react";

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
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" defaultValue={user.firstName} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" defaultValue={user.lastName} />
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputGroup} style={{ flex: 2 }}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" defaultValue={user.email} disabled={!emailEdit} />
              <div className={styles.inputHelp}>Used to log in to your account</div>
            </div>
            <button
              className={styles.editEmailButton}
              type="button"
              onClick={() => setEmailEdit((v) => !v)}
            >
              {emailEdit ? "Save Email" : "Edit Email"}
            </button>
          </div>
        </section>

        {/* Password Section */}
        <section className={styles.sectionPassword}>
          <div className={styles.passwordBlock}>
            <div>
              <div className={styles.passwordLabel}>Password</div>
              <div className={styles.inputHelp}>Log in with your password instead of using temporary login codes</div>
            </div>
            <button className={styles.changePasswordButton} type="button">Change Password</button>
          </div>
        </section>
      </form>
    </div>
  );
}
