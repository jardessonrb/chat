import styles from '../styles/components/button.module.css';

type TypePropsButton = {
    placeholder: string;
    loading: boolean
}

const Button = ({placeholder, loading}: TypePropsButton) => {
    return (
        <button className={styles.buttonAnimated}>
            {loading ? (
                <div className={styles.rotation}></div>
            ) : (
                <div className={styles.placeholder}>{placeholder}</div>
            )}
            
        </button>
    );
}

export default Button;
