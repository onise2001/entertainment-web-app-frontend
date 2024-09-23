import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeMain>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search for movies or TV series" />
        <SearchIcon src="/assets/icon-search.svg" />
      </SearchWrapper>
    </HomeMain>
  );
}

const HomeMain = styled.main`
  background-color: #10141e;
  padding: 2.4rem 1.6rem 0;
  min-height: 100vh;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;
  position: relative;
  padding-left: 4rem;
  width: 100%;
`;

const SearchIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  left: 0.3rem;
  transform: translateY(-50%);
`;
