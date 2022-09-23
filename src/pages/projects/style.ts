import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  width: 1120px;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;
export const Ul = styled.ul`
  height: inherit;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray;
  }
`;
export const Li = styled.li`
  gap: 5px;
  display: flex;
  padding: 10px;
  text-align: start;
  border-radius: 10px;
  flex-direction: column;
  word-break: break-word;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  @media (max-width: 760px) {
    font-size: 13px;
  }
`;
export const TitleProject = styled.strong``;
export const Url = styled.span``;
export const Created_at = styled.span``;
