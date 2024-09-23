import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
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

interface SignUpInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const signUp: SubmitHandler<SignUpInputs> = (data) => console.log(data);

  return (
    <Main>
      <FilmIcon src="/assets/logo.svg" />
      <FormContainer $gap={2.4}>
        <FormTitle>Sign Up</FormTitle>
        <StyledForm $gap={2.4}>
          <StyledInput
            type="email"
            placeholder="Email address"
            {...register("email")}
          />
          <StyledInput
            type="password"
            placeholder="Email"
            {...register("password")}
          />
          <StyledInput
            type="password"
            placeholder="Email"
            {...register("confirmPassword")}
          />

          <Submit type="submit">Create an account</Submit>
        </StyledForm>

        <Span>
          Already have an account?
          <Link to="/auth/login">
            {" "}
            <LoginSpan>Login</LoginSpan>
          </Link>
        </Span>
      </FormContainer>
    </Main>
  );
}
