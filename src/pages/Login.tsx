import React from "react";
import {
  FilmIcon,
  FormContainer,
  FormTitle,
  LoginSpan,
  Main,
  Span,
  StyledForm,
  StyledInput,
  Submit,
} from "../my-styled-components/GlobalStyles";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginInputs {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const login: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <Main>
      <FilmIcon src="/assets/logo.svg" />
      <FormContainer $gap={3}>
        <FormTitle>Login</FormTitle>
        <StyledForm $gap={3}>
          <StyledInput
            type="email"
            placeholder="Email address"
            {...register("email")}
          />
          <StyledInput
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <Submit type="submit">Login to your account</Submit>
        </StyledForm>
        <Span>
          Don’t have an account?
          <Link to="/auth/sign-up">
            <LoginSpan>Sign Up</LoginSpan>
          </Link>
        </Span>
      </FormContainer>
    </Main>
  );
}
