import styled from "styled-components";

export const ItemsContentLayout = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 1121px) {
    grid-column: 1 / -1;
    grid-template-columns: subgrid;

    margin-top: 2rem;
  }
`;

export const ItemLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1.5rem;
`;

export const DetailsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h2 {
    font-size: 2.25em;
    color: #d0cfd4;
    margin: 0;
  }

  > h3 {
    font-size: 1.25em;
    margin: 0;
    cursor: pointer;

    &:hover {
      color: #da6a62;
    }
  }

  > span {
    color: gray;
    line-height: 1.5rem;
  }
`;
