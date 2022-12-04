import styles from './styles.module.css';

import { ReactComponent as SvgGitHub } from 'assets/github-fill.svg';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <a
        className={styles['link']}
        href="https://github.com/willswats/react-calculator"
      >
        <SvgGitHub className={styles['svg']} />
      </a>
      <a className={styles['link']} href="https://williamwatson.dev">
        williamwatson.dev
      </a>
    </footer>
  );
};
