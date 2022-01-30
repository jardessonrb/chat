import { NextComponentType } from "next";
import styles from '../styles/components/message.module.css';

const Message: NextComponentType = () => {
    return (
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
    );
}

export default Message;