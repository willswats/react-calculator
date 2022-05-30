import classes from './Footer.module.css';

import { ReactComponent as IconGitHub } from '../../svgs/github-fill.svg';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <a
        className={classes['link']}
        href="https://github.com/willswats/react-calculator"
      >
        <IconGitHub className={classes['icon']} />
      </a>
      <a className={classes['link']} href="https://williamwatson.dev">
        williamwatson.dev
      </a>
    </footer>
  );
};

export default Footer;
