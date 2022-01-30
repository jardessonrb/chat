import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import iconeUser from '../public/icone-user.jpg';
import Talk from '../components/talk'; 
import iconSendMessage from '../public/send_icon_128459.ico';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.logo}>
        <div className={styles.areaIcon}>
          <Image src={iconeUser} className={styles.icon}/>
        </div>
        <span>Jardesson</span>
      </div>

      <div className={styles.topBar}>
        <div className={styles.areaIcon}>
          <Image src={iconeUser} className={styles.icon}/>
        </div>
        <span>Amor</span>
      </div>

      <div className={styles.sideBar}>
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
        <Talk />
      </div>

      <div className={styles.content}>
       <div className={styles.areaMessages}>
          <span>Messagem</span>
          <span>Messagem</span>
          <span>Messagem</span>
          <span>Messagem</span>
       </div>
       <div className={styles.areaSendMessage}>
         <input type="text" name='input-message' className={styles.inputMessage} placeholder='Digite sua mensagem'/>
         <button><Image src={iconSendMessage} className={styles.iconSendMessage}/></button>
       </div>
      </div>

    </div>
  )
}

export default Home;
