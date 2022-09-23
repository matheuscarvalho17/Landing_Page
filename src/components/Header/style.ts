import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;
export const Content = styled.div`
  width: 1120px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;
export const ContentTitle = styled.section`
  text-align: end;
`;
export const Title = styled.h1`
  font-size: 30px;
`;
export const SubTitle = styled.h5`
  font-size: 13px;
`;
export const Menu = styled.section`
  display: none;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 700px) {
    display: flex;
  }
`;
export const NavLinks = styled.nav<{ sidebar: boolean }>`
  gap: 20px;
  display: flex;
  @media (max-width: 700px) {
    gap: 0;
    top: 0;
    right: 0;
    width: 35%;
    position: fixed;
    min-width: 180px;
    transition: 0.5s;
    margin-top: 100px;
    height: calc(100vh - 100px);
    flex-direction: column;
    background-color: #161616;
    right: ${(props) => (props.sidebar ? '0' : '-100%')};
    a {
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid white;
    }
  }
`;
export const Anchor = styled.a`
  height: 100px;
  font-size: 20px;
  transition: 0.3s;
  &.active {
    background-color: rgb(45, 25, 126);
  }
  @media (min-width: 700px) {
    display: flex;
    padding: 0 10px;
    align-items: center;
  }
`;
