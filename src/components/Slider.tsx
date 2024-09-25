import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Bookmark } from "../my-styled-components/GlobalStyles";

export default function Slider() {
  const [media, setMedia] = useState<MediaType[]>();
  useEffect(() => {
    const fecthTrending = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week",
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
        setMedia(data.results);
      }
    };
    fecthTrending();
  }, []);

  return (
    <SliderContainer>
      <StyledSlider>
        {media?.map((item) => (
          <SliderCard key={item.id} $bgImage={item.poster_path}>
            <Bookmark src="/assets/icon-bookmark-empty.svg" />
            <InfoWrapper>
              <InfoContainer>
                <ReleaseDateContainer>
                  <InfoSpan>{item.release_date}</InfoSpan>
                  <Dot></Dot>
                  <InfoSpan>{item.media_type}</InfoSpan>
                </ReleaseDateContainer>
                <Title>{item.title}</Title>
              </InfoContainer>
            </InfoWrapper>
          </SliderCard>
        ))}
      </StyledSlider>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  overflow: auto;
`;

const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const SliderCard = styled.div<{ $bgImage: string }>`
  min-width: 24rem;
  background-image: url(${({ $bgImage }) =>
    `https://image.tmdb.org/t/p/w200/${$bgImage}`});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0.8rem 1.6rem 1.6rem;
  justify-content: flex-end;
  gap: 4.6rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.8rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ReleaseDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const InfoSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  color: #fff;
  opacity: 0.75;
`;

const Dot = styled.span`
  width: 0.3rem;
  height: 0.3rem;
  background-color: #fff;
  opacity: 0.5;
  border-radius: 50%;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
`;

const Rating = styled.span`
  font-size: 1.3rem;
  font-weight: 300;
  color: #fff;
  padding: 0.2rem 0.8rem 0.3rem;
  border-radius: 10.5px;
  background-color: rgba(255, 255, 255, 0.15);
`;
