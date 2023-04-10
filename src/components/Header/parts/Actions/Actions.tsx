import { Button } from '@/components/Button/Button';
import styles from "./Actions.module.scss";

export const Actions: React.FC = () => (
  <div className={styles.actions}>
    <Button variant="outlined">Login</Button>
    <Button>Sign up</Button>
  </div>
);
