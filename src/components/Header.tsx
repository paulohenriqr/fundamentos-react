import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';


console.log("ignite-logo.svg",igniteLogo)

export function Header(){

    return(
       <header className={styles.header}>
        <img src={igniteLogo} alt="Logo do Ignite" />
       </header>
    )
}