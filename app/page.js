import styles from '@/app/page.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Olá, Eu sou Érica</h1>
      <p className={styles.bio}>
        Sou uma estudante do ensino médio estou cursando Técnico de Informatica. Procuro sempre adiquirir o máximo de conhecimento possivel para obter um bom curriculo,
        estou sempre em busca de novos desafios e oportunidades para aprender.
      </p>

      <div className={styles.skills}>
        <h2>Minhas Habilidades</h2>
        <p>Algumas das minhas habilidades incluem: </p>
        <ul>
          <li>Influência Empática</li>
          <li>Conhecimento em Exatas e Biologia</li>
          <li>Habilidades no Desenho</li>
          <li>Culinárias básicas e avançadas</li>
        </ul>

        <h2>Lugares que Viajei</h2>
        <p>Tive a oportunidade de visitar diversos lugares interessantes, incluindo: </p>
        <ul>
          <li><strong>Aparecida do Norte:</strong> Visitei o santuário e aproveitei a atmosfera espiritual e acolhedora da cidade.</li>
          <li><strong>Belo Horizonte:</strong> Explorei a rica cultura mineira e desfrutei da culinária local e do vibrante cenário urbano.</li>
          <li><strong>Rio de Janeiro:</strong> Encantei-me com as paisagens deslumbrantes, incluindo o Cristo Redentor e as praias icônicas como Copacabana e Ipanema.</li>
          <li><strong>Pouso Alegre:</strong> Conheci a cidade e seus arredores, apreciando a hospitalidade e a beleza natural da região.</li>
          <li><strong>Poços de Caldas:</strong> Relaxe nas famosas águas termais e explorei a charmosa cidade com suas atrações turísticas e naturais.</li>
          <li><strong>Baependi:</strong> Explorei a cidade histórica e conheci a cultura local em um ambiente tranquilo e acolhedor.</li>
          <li><strong>Cachoeira Paulista:</strong> Visitei a cidade conhecida por sua rica espiritualidade e belos cenários naturais.</li>
          <li><strong>Três Corações:</strong> Experimentei a cultura e as tradições locais nesta cidade encantadora.</li>
          <li><strong>Ouro Preto:</strong> Maravilhei-me com a arquitetura colonial e o patrimônio histórico da cidade, que é um importante ponto turístico de Minas Gerais.</li>
          <li><strong>Resende Costa:</strong> Descobri o charme da cidade e sua importância histórica, apreciando a cultura local.</li>
        </ul>

        <h2>Objetivos</h2>
        <p>Tenho vários objetivos para o futuro, incluindo: </p>
        <ul>
          <li>Realizar mais cursos de aperfeiçoamento</li>
          <li>Seguir a carreira de Medicina</li>
          <li>Obter minha carteira de motorista e de moto</li>
          <li>Construir minha própria casa</li>
          <li>Formar minha própria família</li>
        </ul>

        <h2>Perspectivas de Vida</h2>
        <p>Estou focada em continuar meu desenvolvimento pessoal e profissional, buscar oportunidades que me desafiem e contribuir positivamente para a comunidade ao meu redor.</p>

        <h2>Filmes e Series Favoritas</h2>
        <p>Aqui estão alguns dos meus filmes e séries favoritos: </p>
        <ul>
        <li><strong>A Casa Mal-Assombrada:</strong> Um filme que explora mistérios sobrenaturais e eventos paranormais em uma antiga mansão.</li>
          <li><strong>O Exorcista:</strong> Um clássico do terror que aborda o tema do exorcismo e a luta entre o bem e o mal.</li>
          <li><strong>A Casa do Medo:</strong> Um suspense que acompanha uma família enfrentando eventos aterrorizantes em sua nova casa.</li>
          <li><strong>Obsession:</strong> Um thriller psicológico que lida com obsessões e segredos perturbadores.</li>
          <li><strong>Invocação do Mal:</strong> Baseado em eventos reais, este filme segue investigadores paranormais em suas batalhas contra forças malignas.</li>
          <li><strong>Corra:</strong> Um suspense psicológico que mistura terror e crítica social em uma trama intrigante.</li>
          <li><strong>O Livro de Eli:</strong> Um filme pós-apocalíptico sobre um homem em uma jornada para proteger um livro sagrado.</li>
          <li><strong>Até o Último Homem:</strong> Um drama baseado em eventos reais sobre coragem e resiliência durante a Segunda Guerra Mundial.</li>
          <li><strong>Lore:</strong> Uma série documental que explora lendas urbanas e histórias assustadoras baseadas em eventos reais.</li>
          <li><strong>Wandinha:</strong> Uma série que segue as aventuras da jovem e excêntrica Wandinha em um ambiente gótico e misterioso.</li>
          <li><strong>Terror Tuesday Extreme:</strong> Uma série de filmes de terror que apresenta algumas das mais intensas e perturbadoras histórias do gênero.</li>
        </ul>
        </div>
    </div>
  );
}
