import { NextPage } from "next";
import Link from "next/link";
import Button from "../components/button";
import styles from '../styles/login.module.css';

const Login: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <span>Chat - Login</span>
                </div>
                <div className={styles.main}>
                    <input type="text" name="" id="" placeholder="Digite email de acesso"/>
                    <input type="password" name="" id="" placeholder="Digite sua super senha :) "/>
                    <Button placeholder="Logar" loading={false}/>
                </div>
                <div className={styles.footer}>
                    <Link href="./register">Registrar-me</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;