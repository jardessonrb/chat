import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import iconeUser from '../public/icone-user.jpg';
import Talk from '../components/talk'; 

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
       <div className={styles.messages}>

       </div>
       <div className={styles.areaSendMessage}>
         <input type="text" />
       </div>
      </div>

    </div>
  )
}

export default Home;
