import styled from "styled-components";

export const MainContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1121px) {
    grid-column: 1 / 3;
    grid-template-columns: subgrid;
    row-gap: 2rem;
  }
`;

export const ImageContentLayout = styled.div`
  max-height: 300px;
  grid-column: 1 / -1;

  @media (min-width: 796px) {
    max-height: 100%;
  }
`;

export const TitleContentLayout = styled.h2`
  font-size: 2.25em;
  margin-bottom: 1rem;

  @media (min-width: 796px) {
    font-size: 3em;
    margin: 0;
  }
`;

export const DetailsContentLayout = styled.div`
  display: grid;
  gap: 1.5rem;

  > span {
    line-height: 1.75rem;
    color: gray;
  }
`;

export const ButtonContentLayout = styled.button`
  padding: 0.75rem 2rem;
  border: none;
  background: #f15d51;
  color: #fff;
  font-weight: bold;
  letter-spacing: 3px;

  justify-self: flex-start;

  &:hover {
    background: #00001a;
  }
`;
