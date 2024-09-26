import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [page, setPage] = useState<string>("");

  useEffect(() => {
    setPage(location.pathname.slice(1));
  });

  return (
    <StyledHeader>
      <Link to="/home">
        <NavLogo src="/assets/logo.svg" />
      </Link>
      <Navigation>
        <Link to="/home">
          <NavIcon src="/assets/icon-nav-home.svg" $active={page === "home"} />
        </Link>
        <Link to="/movies">
          <NavIcon
            src="/assets/icon-nav-movies.svg"
            $active={page === "movies"}
          />
        </Link>
        <Link to="/tv-shows">
          <NavIcon
            src="/assets/icon-nav-tv-series.svg"
            $active={page === "tv-shows"}
          />
        </Link>
        <Link to="/bookmarks">
          <NavIcon
            src="/assets/icon-nav-bookmark.svg"
            $active={page === "bookmarks"}
          />
        </Link>
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
  cursor: pointer;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavIcon = styled.img<{ $active: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  filter: ${({ $active }) =>
    $active ? " invert(1) brightness(1000%) saturate(0%)" : ""};
  &:hover {
    filter: invert(1) brightness(1000%) saturate(0%);
  }
`;

const ProfileIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: solid 1px #fff;
`;
