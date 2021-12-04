import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background: ${({ theme }) => theme.colors.main.primary};
  color: ${({ theme }) => theme.colors.pure.white};
  font-weight: 600;
  border-radius: 1rem;
  line-height: 2.4rem;
  border: none;
  cursor: pointer;
  transition: filter .25s ease;

  :hover {
    filter: brightness(.9);
  }

  :active {
    transition: filter .15s ease-out;
    filter: brightness(1.2);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.pure.white};
  background: ${({ theme }) => theme.colors.main.primary};
  border-radius: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.6rem;
  line-height: 24px;
  font-weight: 600;
`;
