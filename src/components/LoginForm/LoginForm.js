import React from "react";
import Button from "react-bootstrap/Button";

import styles from "./LoginFrom.module.css";

const LoginForm = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <p className={styles.color}>Nie wiem</p>
          <p className={styles.primaryColor}>Wiem</p>
          <p className={styles.cos_xd}>Kowal</p>
          <input type="text" />
        </label>
      </form>
      <Button variant="dark">Siema</Button>
    </div>
  );
};

export default LoginForm;
