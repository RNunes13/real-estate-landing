import { Logo } from './parts/Logo/Logo';
import { Actions } from './parts/Actions/Actions';
import { Menu } from './parts/Menu/Menu';
import { Container } from '@/components/Container/Container';
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <Menu />
        {/* <Actions /> */}
      </Container>
    </header>
  );
}
