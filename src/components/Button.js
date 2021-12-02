import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background: ${({ theme }) => theme.colors.main.primary};
  color: ${({ theme }) => theme.colors.pure.white};
  font-weight: 600;
  border-radius: 1rem;
  line-height: 2.4rem;
  border: none;
`;
