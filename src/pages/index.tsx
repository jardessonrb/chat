import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideNavigationBar}>
        <div className={styles.userData}>
          <img src="#" alt="Perfil" />
          <span>Jardesson</span>
        </div>
        <div className={styles.searchTalk}>
          <img src="#" alt="Icone" />
          <span>Pesquise por uma conversa</span>
        </div>
        <div className={styles.talks}>
          <div className={styles.talk}>
            <img src="#" alt="Perfil" />
            <span>Tadeuzinho UFPI</span>
            <span className={styles.lastMessage}>Já terminei o trabalho</span>
          </div>
        </div>
      </div>
      <h1>Bem-vindo ao chat</h1>
    </div>
  )
}

export default Home;
