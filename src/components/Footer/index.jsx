import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

const Footer = ({children}) => (
    <footer className={styles.footer}>
      {children}
    </footer>
);

export default Footer;