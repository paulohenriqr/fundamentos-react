import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github/diego3g.png" />
                    <div className={styles.authorInfo}>
                        <strong>Paulo Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Janeiro as 21:31' dateTime="2022-01-12 21:31:00">Publicado a 1h</time>
            </header>


            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">👉 jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}