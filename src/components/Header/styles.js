import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px 90px;
  width: 100%;
`;

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Navigation = styled.div`
  height: 3.9rem;

  ul {
    display: flex;
    list-style: none;
  }
`;

export const Route = styled.li`
  padding: 1rem;
  & + & {
    margin-left: 2rem;
  }

  a {
    font-size: 1.6em;
    text-decoration: none;
    color: ${({ theme, active }) => (!active ? theme.colors.font.secondTitle : theme.colors.main.primary)};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ active }) => (active ? 600 : 500)};
  }
`;

export const LanguageAndCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .button {
    padding: 1.3rem 2.4rem;
  }
`;

export const Language = styled.div`
  display: flex;

  margin-right: 2rem;
  .globeWorld {
    margin-right: 1rem;
  }
  select {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${({ theme }) => theme.colors.font.secondSubtitle};
    cursor: pointer;
    background: none;
  }
`;
