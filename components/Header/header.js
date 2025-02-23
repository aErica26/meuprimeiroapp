import styles from '@/components/Header/header.module.css'
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className={styles.header}>
                    <li><Link href="/"> Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/filmes">Filmes</Link></li>
                    <li><Link href="/livros">Livros</Link></li>
                </ul>
            </nav>
        </header>
    );
}