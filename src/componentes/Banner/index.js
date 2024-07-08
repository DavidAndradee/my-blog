import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Helloo my friends
                </h1>
                <p className={styles.paragrafo}>
                    Olá! Sou
                    David Andrade Engenheiro de Software
                    Bacharel graduado pela Universidade Federal do Ceará, Campus Russas. Profissional em Análise de Testes e Qualidade de Sistemas. Comprometido em garantir qualidade nas soluções de software e a qualidade nas experiências dos usuários.
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>
                <img className={styles.minhaFoto} src={minhaFoto}/>
            </div>

        </div>
    )
}

