import React from "react";
import BackButton from "../BackButton/BackButton";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h2>Contact</h2>
      <p>
        Please send me an email to fake@email.com if you want to learn more
        about my cooking journey or to send me your own recommendations!
      </p>
      <BackButton />
    </div>
  );
}

export default Contact;
