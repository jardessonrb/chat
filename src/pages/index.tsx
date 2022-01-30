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
        <span>Tadeuzinho</span>
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
          <div className={styles.containerMessage}>
            <span className={styles.sender}>Tadeuzinho</span>
            <div>
              <span className={styles.messageContent}>
                Bom dia, já conclui o trabalho.
              </span>
            </div>
            <div className={styles.areaTimeMessage}>
              <span className={styles.timeOfMessage}>17:40</span>
            </div>
          </div>

          <div className={styles.containerMessage}>
            <span className={styles.sender}>Tadeuzinho</span>
            <div>
              <span className={styles.messageContent}>
                Adioionei mais coisas lá também
              </span>
            </div>
            <div className={styles.areaTimeMessage}>
              <span className={styles.timeOfMessage}>17:40</span>
            </div>
          </div>

          <div className={styles.containerMessage}>
            <span className={styles.sender}>Tadeuzinho</span>
            <div>
              <span className={styles.messageContent}>
                Já criei os testes e fix mais algumas coisas lá também.
                Adiantei a parte do README, descrevi como rodar o projeto e tudo mais ....
              </span>
            </div>
            <div className={styles.areaTimeMessage}>
              <span className={styles.timeOfMessage}>17:40</span>
            </div>
          </div>

          <div className={styles.containerMessage}>
            <span className={styles.sender}>Tadeuzinho</span>
            <div>
              <span className={styles.messageContent}>
                Já criei os testes e fix mais algumas coisas lá também.
                Adiantei a parte do README, descrevi como rodar o projeto e tudo mais ....
              </span>
            </div>
            <div className={styles.areaTimeMessage}>
              <span className={styles.timeOfMessage}>17:40</span>
            </div>
          </div>

          <div className={styles.containerMessage}>
            <span className={styles.sender}>Tadeuzinho</span>
            <div>
              <span className={styles.messageContent}>
                Já criei os testes e fix mais algumas coisas lá também.
                Adiantei a parte do README, descrevi como rodar o projeto e tudo mais ....
              </span>
            </div>
            <div className={styles.areaTimeMessage}>
              <span className={styles.timeOfMessage}>17:40</span>
            </div>
          </div>

          <div className={styles.containerMessage}>
            <span className={styles.sender}>Tadeuzinho</span>
            <div>
              <span className={styles.messageContent}>
                Já criei os testes e fix mais algumas coisas lá também.
                Adiantei a parte do README, descrevi como rodar o projeto e tudo mais ....
              </span>
            </div>
            <div className={styles.areaTimeMessage}>
              <span className={styles.timeOfMessage}>17:40</span>
            </div>
          </div>
          
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
