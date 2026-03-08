import React, {useState} from "react";
import S from "./sejaVoluntario.module.scss";

export default function SejaVoluntario() {
const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://one-desafio-backend.onrender.com/cadastros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Inscrição enviada com sucesso!");
        // Limpa o formulário após o envio
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      } else {
        alert("Erro ao enviar inscrição. Verifique o servidor.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Não foi possível conectar ao servidor.");
    }
  };
  
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
        <form className={S.formulario} onSubmite={handleSubmit}>
          <h2>Inscrição para Voluntários</h2>

          <div className={S.campoPreencher}>
            <h3>Dados Pessoais</h3>
            <div className={S.inputsRow}>
              <input 
                type="text" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu Nome *" 
                className={S.input} 
                required/>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu Email *"
                className={S.input}
                required
              />
            </div>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
                onChange={handleChange}
              placeholder="Seu Telefone *"
              className={S.inputFull}
              required
            />
          </div>

          <div className={S.campoPreencher}>
            <h3>Mensagem Adicional</h3>
            <textarea
              name="mensagem"
              value={formData.mensagem}
                onChange={handleChange}
              placeholder="Conte-nos porque você quer ser voluntário..."
              className={S.textarea}
              rows="4"
            ></textarea>
          </div>

          <p className={S.infoText}>
            Entraremos em contato para mais informações
          </p>
          <button type="submit" className={S.submitButton}>Enviar Inscrição</button>
        </form>
      </section>
    </main>
  );
}
