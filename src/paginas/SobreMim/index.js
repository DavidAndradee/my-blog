
import PostModelo from "componentes/PostModelo";
import styles from "./SobreMim.module.css"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpeg"


export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>Olá DAvid na Area</h3>
            <img src={fotoSobreMim} className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}>
                Engenheiro de Software com domínio no processo de desenvolvimento de sistemas de maneira ágil. Focado em Qualidade de software e do processo de desenvolvimento, com enfâse em testes, verificação e validação funcional e back-end voltada a requisições de API.
            </p>
            <p className={styles.paragrafo}>
                Experiência e conhecimentos solido na análise de Requisitos e de Sistemas, crucial para garantir que o produto final atenda às expectativas dos usuários e dos stakeholders.
            </p>
            <p className={styles.paragrafo}>
                Experiência avançada em desenvolvimento ágil, demonstrando capacidade de adaptação a mudanças e colaboração proativa e eficaz em equipes multifuncionais. Profundo entendimento dos requisitos do projeto, demonstrando habilidade para analisar e interpretar detalhadamente as necessidades do cliente.
            </p>
            <p className={styles.paragrafo}>
                Experiência em prototipação, destacando a capacidade de criar modelos visuais e funcionais para validar conceitos e antecipar potenciais desafios. Competências recentemente adquiridas em desenvolvimento front-end, fortalecendo a capacidade de análise para garantia da qualidade, ao entender os aspectos técnicos e estéticos da interface do usuário.
            </p>
        </PostModelo>
    )
}