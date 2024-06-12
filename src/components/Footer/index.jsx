import styles from './styles.module.css';

import SvgGitHub from 'assets/github-fill.svg?react';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <a
        className={styles['link']}
        href="https://github.com/willswats/react-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgGitHub className={styles['svg']} />
      </a>
      <a
        className={styles['link']}
        href="https://williamwatson.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        williamwatson.dev
      </a>
    </footer>
  );
};
