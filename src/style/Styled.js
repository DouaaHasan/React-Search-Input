import styled, { css } from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1450px;
`;

export const Icon = styled.i`
  position: relative;
  z-index: 3;
  color: rgba(18, 25, 78, 0.66);
  width: 0;
  ${({ chevron }) =>
    chevron &&
    css`
      left: -25px;
    `}
  ${({ search }) =>
    search &&
    css`
      left: 11px;
    `}
`;

export const Input = styled.input`
  border: 1px solid #4a4a4a;
  font-size: ${({ theme }) => theme.fonts.med};
  letter-spacing: 1.2px;
  width: 30%;
  min-width: 250px;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 1rem 1rem 2.5rem;
  display: inline-block;
  border-radius: 6px;
  outline: none;
  &:hover {
    border: 1px solid #4a4a4a;
    color: #798697;
    cursor: pointer;
  }
  &:focus {
    border: 1px solid #bfc5cd;
    color: #4a4a4a;
    box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
    cursor: text;
  }
`;

export const Label = styled.label`
  position: absolute;
  z-index: 1;
  font-size: ${({ theme }) => theme.fonts.med};
  font-weight: bold;
  color: #807d7de3;
  transition: 0.3s;
  color: #798697;
  bottom: 16px;
  left: 35px;
  ${({ focusMode }) =>
    focusMode &&
    css`
      bottom: 65px;
      left: 8px;
    `}
`;

export const Ul = styled.ul`
  list-style-type: none;
  width: 35%;
  height: 350px;
  overflow-y: scroll;
  padding: 0px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

export const Li = styled.li`
  cursor: pointer;
  padding: 1.5rem;
  color: #bfc5cd;
  letter-spacing: 1px;
  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.text};
  }
`;
