import React, { useState } from "react";
import { ContainerForm, ContainerSignup, Input } from "./styled";
import { useForm } from "../../hooks/useForm";

export default function Signup() {
const {form, onChange, clearInputs} = useForm({
    nomeUsuario: "",
    email: "",
    senha: "",
    confirmaSenha: ""
  })


  const enviarCadastro = (e) => {
    e.preventDefault()
    //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    if (form.senha === form.confirmaSenha) {
      console.log(form);
    }
    clearInputs()
  };

  return (
    <ContainerSignup>
      <ContainerForm onSubmit={enviarCadastro}>
        <label htmlFor="nome">Nome de usuario:</label>
        <Input
          id="nome"
          name="nomeUsuario"
          value={form.nomeUsuario}
          onChange={onChange}
          placeholder="username"
          type="text"
          pattern="^[a-zA-Zà-úÀ-Ú\s]{2,}$"
          title="O nome deve conter pelo menos 2 caracteres"
          required
        />
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'"
          title="Insira um e-mail válido"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="senha"
          value={form.senha}
          onChange={onChange}
          placeholder="Crie sua senha"
          minLength={8}
          required
        />
        <label htmlFor="confirma-senha">Confirmação de senha:</label>
        <Input
          id="confirma-senha"
          name="confirmaSenha"
          value={form.confirmaSenha}
          onChange={onChange}
          placeholder="Confirme a senha"
          minLength={8}
          required
        />
        <button>Cadastrar</button>
      </ContainerForm>
    </ContainerSignup>
  );
}
