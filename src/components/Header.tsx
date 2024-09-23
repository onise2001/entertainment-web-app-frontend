import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <NavLogo src="/assets/logo.svg" />
      <Navigation>
        <NavIcon src="/assets/icon-nav-home.svg" />
        <NavIcon src="/assets/icon-nav-movies.svg" />
        <NavIcon src="/assets/icon-nav-tv-series.svg" />
        <NavIcon src="/assets/icon-nav-bookmark.svg" />
      </Navigation>
      <ProfileIcon src="/assets/image-avatar.png" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.6rem;
  background-color: #161d2f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.img`
  width: 2.5rem;
  height: 2rem;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const ProfileIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: solid 1px #fff;
`;
