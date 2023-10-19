import styled from "styled-components";

export const MenuLayout = styled.div`
  background: #fff;
  height: 100vh;
  width: 60vw;
  padding: 1.5rem;

  position: absolute;
  top: 0;
  right: 0;

  transform: translateX(100%);
  transition: 300ms;

  @media (min-width: 1121px) {
    position: static;
    transform: revert;
    width: revert;
    height: revert;
    padding: revert;
  }
`;

export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 5rem;
  cursor: pointer;

  & > span:hover {
    color: #e79895;
  }

  @media (min-width: 1121px) {
    flex-direction: row;
    margin-top: revert;
  }
`;

export const CloseIconLayout = styled.div`
  display: flex;
  justify-content: flex-end;

  > img {
    cursor: pointer;
  }

  @media (min-width: 1121px) {
    display: none;
  }
`;
