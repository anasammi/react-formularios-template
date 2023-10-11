import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { irParaCadastro } from "../../Routes/coordinator";
import { ContainerForm, ContainerLogin, Input } from "./styled";
import { useForm } from "../../hooks/useForm";

export default function Login() { 
  const {form, onChange, clearInputs} = useForm({email: "", password: ""})
  const navigate = useNavigate();

  const enviaLogin = (e) => {
    e.preventDefault();
    console.log(form);
    clearInputs()
  };

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua senha"
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>
        Ainda não tenho uma conta
      </button>
    </ContainerLogin>
  );
}
