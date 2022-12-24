import Link from 'next/link';
import styles from '../../styles/Nav.module.css';

export default function Navbar() {
  return (
    <ul className={styles.NavBar}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products/shirts">Camisas</Link></li>
      <li><Link href="/products/pants">Calças</Link></li>
      <li><Link href="/about">Sobre</Link></li>
      <li><Link href="/products">Produtos</Link></li>
      <li><Link href="/todos">Todos</Link></li>
    </ul>
  );
}
