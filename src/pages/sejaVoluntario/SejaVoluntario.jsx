import React from "react";
import S from "./sejaVoluntario.module.scss";

export default function SejaVoluntario() {
  return (
    <main>
      <section className={S["page-header"]}>
        <h1 className={S.title}>Seja Voluntário</h1>
        <p className={S.subtitle}>
          Junte-se a nós e faça a diferença na vida de pessoas que precisam
        </p>
      </section>

      <section className={S["voluntario-section"]}>
        <div className={S["cards-container"]}>
          <div className={S["voluntario-card"]}>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </div>

          <div className={S["voluntario-card"]}>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </div>

          <div className={S["voluntario-card"]}>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </div>
        </div>
      </section>

      <section className={S["formulario-section"]}>
        <div className={S.formulario}>
          <h2>Inscrição para Voluntários</h2>

          <div className={S.campoPreencher}>
            <h3>Dados Pessoais</h3>
            <div className={S.inputsRow}>
              <input type="text" placeholder="Seu Nome *" className={S.input} />
              <input
                type="email"
                placeholder="Seu Email *"
                className={S.input}
              />
            </div>
            <input
              type="tel"
              placeholder="Seu Telefone *"
              className={S.inputFull}
            />
          </div>

          <div className={S.campoPreencher}>
            <h3>Mensagem Adicional</h3>
            <textarea
              placeholder="Conte-nos porque você quer ser voluntário..."
              className={S.textarea}
              rows="4"
            ></textarea>
          </div>

          <p className={S.infoText}>
            Entraremos em contato para mais informações
          </p>
          <button className={S.submitButton}>Enviar Inscrição</button>
        </div>
      </section>
    </main>
  );
}
