import styled from 'styled-components';

export const Item = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  align-items: center;
  word-break: break-word;
  @media (max-width: 760px) {
    font-size: 12px;
  }
`;
export const Icon = styled.div`
  display: flex;
  margin-right: 10px;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const Button = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background: none;
  outline: inherit;
`;
export const Text = styled.a`
  color: white;
  text-align: start;
`;
