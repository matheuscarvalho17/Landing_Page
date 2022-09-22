import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
export const Content = styled.div`
  gap: 50px;
  height: 100%;
  padding: 20px;
  display: flex;
  width: 1120px;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;
