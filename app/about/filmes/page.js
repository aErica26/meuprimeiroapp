
import styles from '@/app/about/filmes/filmes.module.css';
import Image from 'next/image';

export default function About() { 
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Filmes</h1>
            <h2 className={styles.subtitle}>Explore, Descubra e Aprecie Filmes de Todos os Gêneros</h2>
            <p className={styles.description}>
                Descubra uma ampla seleção de filmes que atendem a todos os gostos e interesses. 
                De grandes clássicos e lançamentos recentes a obras-primas escondidas, nossa coleção oferece algo para todos. 
                Navegue por análises detalhadas, receba recomendações personalizadas e fique por dentro das últimas novidades do mundo do cinema. 
                Seja para uma noite de entretenimento ou uma maratona de filmes, temos sugestões que vão enriquecer sua experiência. 
                Explore, encontre novos favoritos e aproveite cada momento diante da tela.
            </p>
            <div className={styles.imagesConteiner}>
                <Image src="/OPoderosoChefão.jpg" alt="Filme 1" width={380} height={300} className={styles.image} />
                <Image src="/ANoviçaRebelde.jfif" alt="Filme 2" width={380} height={300} className={styles.image} />
                <Image src="/MadMaxEstradadaFúria.jpg" alt="Filme 3" width={380} height={300} className={styles.image} />
                <Image src="/VingadoresUltimato.jpg" alt="Filme 4" width={380} height={300} className={styles.image} />
                <Image src="/AGrandeAposta.webp" alt="Filme 5" width={380} height={300} className={styles.image} />
                <Image src="/ODiaboVestePrada.jpg" alt="Filme 6" width={380} height={300} className={styles.image} />
                <Image src="/DivertidaMente2.jfif" alt="Filme 7" width={380} height={300} className={styles.image} />
                <Image src="/ToyStory.jfif" alt="Filme 8" width={380} height={300} className={styles.image} />
                <Image src="/OExorcista.jfif" alt="Filme 9" width={380} height={300} className={styles.image} />
                <Image src="/Corra.jfif" alt="Filme 10" width={380} height={300} className={styles.image} />
            </div>
        </div>
    );
}

