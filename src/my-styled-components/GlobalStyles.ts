import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:"Outfit", sans-serif;
  }


  html{
    font-size:62.5%;
  }

`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.8rem;
  gap: 5.8rem;
  background-color: #10141e;
  min-height: 100vh;
`;

export const FilmIcon = styled.img`
  width: 3.2rem;
  height: 2.5rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: #161d2f;
  padding: 2.4rem 2.4rem 3.2rem;
  width: 32.7rem;
  border-radius: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin-bottom: 1.6rem;
  color: #fff;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: solid 1px #5a698f;
  width: 100%;
  padding: 0 0 1.7rem 1.7rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  background-color: #161d2f;
`;

export const Submit = styled.button`
  all: unset;
  width: 100%;
  padding: 1.4rem 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;
  text-align: center;
  background-color: #fc4747;
  border-radius: 6px;
  margin-top: 1.6rem;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;
  align-self: center;
`;

export const LoginSpan = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: #fc4747;
  margin-left: 0.8rem;
`;

export default GlobalStyles;
