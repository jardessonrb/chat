import styles from '../styles/components/message.module.css';

type TypePropsMessage = {
    type: "sender" | "receptor";
}

const Message = ({type}: TypePropsMessage) => {
    return type == "receptor" ? 
    (
        <div className={styles.containerMessageReceptor}>
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
    ) : (
        <div className={styles.containerMessageSender}>
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