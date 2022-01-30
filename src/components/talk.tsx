import { NextComponentType } from 'next';
import styles from '../styles/components/talk.module.css';
import Image from 'next/image';
import iconeUser from '../public/icone-user.jpg';

const Talk: NextComponentType = () => {
    return (
        <div className={styles.talk}>
          <div className={styles.areaIcon}>
            <Image src={iconeUser} className={styles.icon}/>
          </div>
          <div className={styles.body}>
              <div className={styles.top}>
                <span className={styles.userName}>Tadeuzinho</span>
                <span className={styles.timeLastMessage}>17:41</span>
              </div>
              <div>
                <span className={styles.lastMessage}>Já terminei o trabalho ...</span>
              </div>
          </div>
        </div>
    );
}


export default Talk;