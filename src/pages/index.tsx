import type { NextPage } from 'next';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import iconeUser from '../public/icone-user.jpg';
import Talk from '../components/talk'; 
import iconSendMessage from '../public/send.ico';
import Message from '../components/message';
import iconConfig from '../public/config.ico';
import iconLogout from '../public/logout.ico'

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
        <div className={styles.topBarBody}>
          <div className={styles.informationUser}>
            <span>Tadeuzinho</span>
            <span>Online</span>
          </div>
          <div className={styles.actionsUser}>
            <button>
              <Image src={iconConfig} className={styles.iconAction} />
            </button>
            <button>
              <Image src={iconLogout} className={styles.iconAction} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sideBar}>
        <div className={styles.searchUser}>
          <input type="text" className={styles.inputSearchUser} placeholder='Digite o nome de usuario'/>
        </div>
        <div className={styles.talks}>
          <Talk />
          <Talk />
          <Talk />
          <Talk />
          <Talk />
          <Talk />
          <Talk />
        </div>
      </div>

      <div className={styles.content}>
       <div className={styles.areaMessages}>
         <Message type="receptor" />
         <Message type="sender" />
         <Message type="receptor" />
         <Message type="sender" />
         <Message type="receptor" />
         <Message type="sender" />
         <Message type="receptor" />
         <Message type="sender" />
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
