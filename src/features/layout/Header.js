import styles from "./Header.module.css";
import { ThemeSwitch } from "features/Theme/ThemeSwitch";
import { Container } from "components/Layout/Container";

export function Header() {
  return (
    <Container as="header" className={styles.header}>
      <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png" alt="" height="50" />
      <ThemeSwitch />
    </Container>
  );
}
