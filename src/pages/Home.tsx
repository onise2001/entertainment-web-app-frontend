import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import { Bookmark } from "../my-styled-components/GlobalStyles";

export default function Home() {
  const [recomendations, setRecomendations] = useState<MediaType[]>();
  useEffect(() => {
    const fetchReccomendetions = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/533535/recommendations",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDJiZTg0ZTcxNDMwNWE2MDAyMmM4YzZjMDc1NzQyNiIsIm5iZiI6MTcyNzI4MzIxMC4yOTU4MjQsInN1YiI6IjY2ZjQzYWVmNzQwMTM4NjQxZTZhMWFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84C31F_cSkhzu-ZjSqW8YU37O8r0Ju3u1_hnb8vkldo",
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setRecomendations(data.results);
      }
    };
    fetchReccomendetions();
  }, []);
  return (
    <HomeMain>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search for movies or TV series" />
        <SearchIcon src="/assets/icon-search.svg" />
      </SearchWrapper>
      <Trending>
        <SectionTitle>Trending</SectionTitle>
        <Slider />
      </Trending>
      <Recomendations>
        <SectionTitle>Recommended For You</SectionTitle>
        {recomendations?.map((item) => (
          <RecomendationsCard key={item.id}>
            <RecomendationBookmark src="/assets/icon-bookmark-empty.svg" />
            <RecomendationsCardImage
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            />
          </RecomendationsCard>
        ))}
      </Recomendations>
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
  padding-left: 3.4rem;
  width: 100%;
`;

const SearchIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const Trending = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 2.4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: -0.31px;
  color: #fff;
`;

const Recomendations = styled.section`
  display: flex;

  flex-wrap: wrap;
  gap: 1.5rem;
`;

const RecomendationsCard = styled.div`
  width: 16.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const RecomendationsCardImage = styled.img`
  width: 100%;
  height: 11rem;
  border-radius: 8px;
  object-fit: cover;
  object-position: top;
`;

const RecomendationBookmark = styled(Bookmark)`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
`;
