import styles from "./Header.module.css";
import { ThemeSwitch } from "features/Theme/ThemeSwitch";
import { Container } from "components/Layout/Container";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container as="header" className={styles.header}>
      <Link to="/">
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png" alt="" height="50" />
      </Link>
      <ThemeSwitch />
    </Container>
  );
}
