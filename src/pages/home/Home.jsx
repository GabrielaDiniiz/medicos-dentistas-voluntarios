import estetoscopio from "../../assets/estetoscopio.png";
import S from "./home.module.scss";
import medico from "../../assets/medico.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className={S.hero}>
        <div className={S.content}>
          <div className={S["hero-estetoscopio"]}>
            <img src={estetoscopio} alt="icone estetoscopio" />
            <p>Saúde para todos</p>
          </div>
          <h1>Saúde e cuidado sem barreiras</h1>
          <p className={S.text}>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>

          <div className={S.boxButton}>
            <Link to="/voluntario"> Seja Voluntário</Link>
            <a href="">Como ajudar</a>
          </div>
        </div>

        <div className={S.heroImg}>
          <img src={medico} alt="imagem de médico" />
        </div>
      </section>

      <section className={S.missao}>
        <h2>Nossa Missão</h2>
        <p>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>

        <div className={S["missao-cards-container"]}>
          <article className={S.missaoCard}>
            <h3>Acesso Equitativo</h3>
            <p className={S.missaoText}>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>

          <article className={S.missaoCard}>
            <h3>Comunidade Forte</h3>
            <p className={S.missaoText}>
              Construir uma rede de profissionais de saúde dedicados a servir
              com compaixão e profissionalismo.
            </p>
          </article>

          <article className={S.missaoCard}>
            <h3>Bem-estar Total</h3>
            <p className={S.missaoText}>
              Oferecer atendimento integral em medicina geral e odontologia para
              melhorar a qualidade de vida.
            </p>
          </article>
        </div>
      </section>

      <section className={S.impacto}>
        <h2>Nosso Impacto</h2>
        <p>
          Transformando a saúde de nossa comunidade, um paciente de cada vez.
        </p>

        <div className={S["impacto-cards-container"]}>
          <article className={S.impactoCard}>
            <h3>2,500+</h3>
            <p className={S.impactoText}>Pessoas Atendidas</p>
          </article>

          <article className={S.impactoCard}>
            <h3>150+</h3>
            <p className={S.impactoText}>Profissionais Voluntários</p>
          </article>

          <article className={S.impactoCard}>
            <h3>98%</h3>
            <p className={S.impactoText}>Satisfação dos Pacientes</p>
          </article>

          <article className={S.impactoCard}>
            <h3>5+</h3>
            <p className={S.impactoText}>Anos de Dedicação</p>
          </article>
        </div>
      </section>
    </main>
  );
}
