
import styles from '@/app/about/livros/livros.module.css';
import Image from 'next/image';

export default function About() { 
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Livros</h1>
            <h2 className={styles.subtitle}>Explore, Descubra e Aprecie Livros de Todos os Gêneros</h2>
            <p className={styles.description}>
                Descubra uma ampla seleção de livros que atendem a todos os gostos e interesses.  
                Explore, encontre novos favoritos e aproveite cada momento diante da tela.
            </p>
            <div className={styles.imagesConteiner}>
                <Image src="/QuatroAmoresNaEscocia.jfif" alt="Filme 1" width={380} height={300} className={styles.image} />
                <Image src="/HarryPoterAPedraFilosofal.jfif" alt="Livro 2" width={380} height={300} className={styles.image} />
                <Image src="/ÉAssimQueComeça.jfif" alt="Livro 3" width={380} height={300} className={styles.image} />
                <Image src="/TudoQueMeuCoraçãoGrita.jfif" alt="Livro 4" width={380} height={300} className={styles.image} />
                <Image src="/OPoderDoAgora.jfif" alt="Livro 5" width={380} height={300} className={styles.image} />
                <Image src="/SherlockHolmes.jfif" alt="Livro 6" width={380} height={300} className={styles.image} />
                <Image src="/PrincesaDasCinzas.jfif" alt="Livro 7" width={380} height={300} className={styles.image} />
                <Image src="/ÉAssimQueAcaba.jfif" alt="Livro 8" width={380} height={300} className={styles.image} />
            </div>
        </div>
    );
}
