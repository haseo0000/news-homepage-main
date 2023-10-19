import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1121px) {
    padding-block: 0.75rem;
  }
`;

export const ImageLayout = styled.div`
  width: 50px;
  cursor: pointer;

  @media (min-width: 1121px) {
    &.menuIcon {
      display: none;
    }
  }
`;
