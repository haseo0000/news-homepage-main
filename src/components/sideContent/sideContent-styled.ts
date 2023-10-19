import styled from "styled-components";

export const SideContentLayout = styled.div`
  display: grid;
  padding: 1.25rem;
  margin-top: 3rem;

  background: #00001a;

  > h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 2.5em;
    color: #f2a852;
  }

  @media (min-width: 1121px) {
    grid-column: 2 / -1;
    margin-top: 0;
  }
`;

export const CardContentLayout = styled.div`
  > h3 {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  > span {
    color: gray;
    line-height: 1.6rem;
  }
`;

export const Line = styled.div`
  height: 1px;
  background: gray;
  margin-block: 1.5rem;
`;
