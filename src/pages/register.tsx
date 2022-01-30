import { NextPage } from "next";
import Link from "next/link";
import Button from "../components/button";
import styles from '../styles/register.module.css';

const Register: NextPage = () => {
    var loading = false;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <span>Chat - Register</span>
                </div>
                <div className={styles.main}>
                    <input type="text" name="" id="" placeholder="Digite um nickname único :)"/>
                    <input type="text" name="" id="" placeholder="Digite seu melhor email"/>
                    <input type="password" name="" id="" placeholder="Digite sua super senha (6+ caracteres) "/>
                    <input type="password" name="" id="" placeholder="Confirme sua super senha :) "/>

                    <Button placeholder="Registrar" loading={loading}/>
                </div>
                <div className={styles.footer}>
                    <Link href="./login">Já possuo login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;